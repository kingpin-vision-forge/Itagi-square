'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './curved-ribbon-gallery.module.css';

export interface CurvedRibbonGalleryProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

function subscribeToMotionPreference(notify: () => void) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', notify);
  return () => preference.removeEventListener('change', notify);
}

const vertexSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = (aPosition + 1.0) * 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const fragmentSource = `
  precision mediump float;
  varying vec2 vUv;
  uniform sampler2D uImage;
  uniform float uRotation;
  uniform float uPanels;
  void main() {
    float x = vUv.x * 2.0 - 1.0;
    float depth = 1.0 - sqrt(max(0.0, 1.0 - x * x));
    float top = 0.2202 - 0.1733 * depth;
    float bottom = 0.7184 + 0.1733 * depth;
    float y = 1.0 - vUv.y;
    if (y < top || y > bottom) discard;

    // Project the panorama around the inside of a shallow cylinder.
    float longitude = atan(x * 0.28) / atan(0.28);
    float position = (longitude * 0.5 + 0.5) * uPanels + 0.6 + uRotation;
    float panel = mod(floor(position), 3.0);
    float horizontal = fract(position);
    if (horizontal < 0.025 || horizontal > 0.975) discard;

    // Sample only photographs from the supplied reference, excluding its UI.
    vec4 crop;
    if (panel < 1.0) crop = vec4(962.0, 355.0, 377.0, 274.0);
    else if (panel < 2.0) crop = vec4(162.0, 355.0, 377.0, 274.0);
    else crop = vec4(562.0, 356.0, 377.0, 272.0);
    vec2 photo = vec2((horizontal - 0.025) / 0.95, (y - top) / (bottom - top));
    vec2 uv = (crop.xy + photo * crop.zw) / vec2(1440.0, 866.0);
    gl_FragColor = texture2D(uImage, uv);
  }
`;

export function CurvedRibbonGallery({
  imageSrc = '/images/dining/ribbon-full.png',
  alt = 'Indo-Arabic dishes including herb-marinated skewers and cashew stir-fry',
  className,
}: CurvedRibbonGalleryProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controllerRef = useRef<((playing: boolean) => void) | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => true
  );
  const [playOverride, setPlayOverride] = useState<boolean | null>(null);
  const [available, setAvailable] = useState(false);
  const playing = playOverride ?? !reducedMotion;
  const playingRef = useRef(playing);

  useEffect(() => {
    playingRef.current = playing;
    controllerRef.current?.(playing);
  }, [playing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: false });
    if (!canvas || !gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    const buffer = gl.createBuffer();
    const texture = gl.createTexture();
    if (!buffer || !texture) {
      if (buffer) gl.deleteBuffer(buffer);
      if (texture) gl.deleteTexture(texture);
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.uniform1i(gl.getUniformLocation(program, 'uImage'), 0);
    const rotationUniform = gl.getUniformLocation(program, 'uRotation');
    const panelsUniform = gl.getUniformLocation(program, 'uPanels');

    let frame = 0;
    let rotation = 0;
    let previousTime = 0;
    let inView = false;
    let ready = false;
    let disposed = false;
    let wantsMotion = playingRef.current;
    const image = new window.Image();

    const draw = () => {
      if (!ready || disposed) return;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(rotationUniform, rotation);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const tick = (time: number) => {
      frame = 0;
      if (!ready || !wantsMotion || !inView || document.hidden || disposed) {
        previousTime = 0;
        return;
      }
      if (previousTime) rotation = (rotation + Math.min(time - previousTime, 64) / 14000) % 3;
      previousTime = time;
      draw();
      frame = window.requestAnimationFrame(tick);
    };
    const syncPlayback = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      if (ready && wantsMotion && inView && !document.hidden && !disposed) {
        frame = window.requestAnimationFrame(tick);
      }
    };
    controllerRef.current = (nextPlaying) => {
      wantsMotion = nextPlaying;
      syncPlayback();
    };
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * ratio);
      canvas.height = Math.round(canvas.clientHeight * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(panelsUniform, canvas.clientWidth < 640 ? 1.65 : 3.6);
      draw();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    const resizeObserver = new ResizeObserver(resize);
    observer.observe(canvas);
    resizeObserver.observe(canvas);
    document.addEventListener('visibilitychange', syncPlayback);
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      ready = false;
      canvas.dataset.ready = 'false';
      setAvailable(false);
      syncPlayback();
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);
    image.onload = () => {
      if (disposed) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      ready = true;
      resize();
      canvas.dataset.ready = 'true';
      setAvailable(true);
      syncPlayback();
    };
    image.src = imageSrc;

    return () => {
      disposed = true;
      image.onload = null;
      window.cancelAnimationFrame(frame);
      controllerRef.current = null;
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [imageSrc]);

  return (
    <div className={cn(styles.gallery, className)}>
      <div className={styles.stage} role="img" aria-label={alt}>
        <svg className={styles.fallback} viewBox="0 230 1440 554" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <clipPath id="dining-photo-fallback">
              <path d="M0 258 C190 385 1250 385 1440 258 L1440 744 C1250 590 190 590 0 718 Z" />
            </clipPath>
          </defs>
          <image href={imageSrc} width="1440" height="866" clipPath="url(#dining-photo-fallback)" />
        </svg>
        <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
        <svg className={styles.outlines} viewBox="0 0 1440 554" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 5 C130 125 1310 125 1440 5" />
          <path d="M0 554 C0 395 1440 395 1440 525" />
        </svg>
      </div>
      {available && (
        <button
          type="button"
          className={styles.playback}
          onClick={() => setPlayOverride(!playing)}
          aria-label={playing ? 'Pause food gallery' : 'Play food gallery'}
          aria-pressed={!playing}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
