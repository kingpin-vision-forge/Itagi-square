'use client';

import { useEffect, useRef } from 'react';
import styles from './brand-intro.module.css';

// Activate on every home page load, before the page's first paint.
// The independent timeout also uncovers the page if hydration fails.
const bootstrap = `(() => {
  const intro = document.getElementById('brand-intro');
  if (!intro) return;
  intro.dataset.active = 'true';
  window.setTimeout(() => { intro.dataset.active = 'false'; }, 4500);
})();`;

export function BrandIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cutoutRef = useRef<SVGTextElement>(null);
  const wordmarkRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const cutout = cutoutRef.current;
    const wordmark = wordmarkRef.current;
    if (!overlay || !cutout || !wordmark || overlay.dataset.active !== 'true') return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations: Animation[] = [];
    let cancelled = false;
    let readyTimeout: number;

    function finish() {
      cancelled = true;
      overlay!.dataset.active = 'false';
      animations.forEach((animation) => animation.cancel());
    }

    // Let keyboard users reach the site immediately, including on first Tab.
    window.addEventListener('keydown', finish);
    window.addEventListener('pagehide', finish);
    window.addEventListener('resize', finish);
    document.addEventListener('focusin', finish);
    motionPreference.addEventListener('change', finish);

    async function play() {
      const heroImage = document.querySelector<HTMLImageElement>('[aria-labelledby="hero-title"] img');
      const assets = Promise.allSettled([
        document.fonts.load('160px "Cormorant Garamond"'),
        document.fonts.ready,
        heroImage?.decode(),
      ]);

      // Only the hero and wordmark matter here; don't wait for the whole page.
      await Promise.race([
        assets,
        new Promise<void>((resolve) => { readyTimeout = window.setTimeout(resolve, 1200); }),
      ]);
      window.clearTimeout(readyTimeout);
      if (cancelled || overlay!.dataset.active !== 'true') return;

      if (motionPreference.matches) {
        const fade = overlay!.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: 'forwards',
          easing: 'ease',
        });
        animations.push(fade);
        fade.onfinish = finish;
        return;
      }

      // SVG mask contents don't reliably resolve a fill-box transform origin.
      // Use the SVG viewport's coordinates and keep its center fixed explicitly.
      const viewport = overlay!.getBoundingClientRect();
      const centerX = viewport.width / 2;
      const centerY = viewport.height / 2;
      const bounds = cutout!.getBBox();
      const offsetX = centerX - (bounds.x + bounds.width / 2);
      const offsetY = centerY - (bounds.y + bounds.height / 2);
      for (const text of [cutout!, wordmark!]) {
        text.setAttribute('x', String(centerX + offsetX));
        text.setAttribute('y', String(centerY + offsetY));
      }
      const zoom = 28;

      const inkFade = wordmark!.animate([{ opacity: 1 }, { opacity: 0 }], {
        delay: 150,
        duration: 400,
        fill: 'forwards',
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
      });
      const expand = cutout!.animate([
        { transform: 'matrix(1, 0, 0, 1, 0, 0)' },
        { transform: `matrix(${zoom}, 0, 0, ${zoom}, ${centerX * (1 - zoom)}, ${centerY * (1 - zoom)})` },
      ], {
        delay: 450,
        duration: 1450,
        fill: 'forwards',
        easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      });
      const exit = overlay!.animate([{ opacity: 1 }, { opacity: 0 }], {
        delay: 1650,
        duration: 300,
        fill: 'forwards',
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
      });
      animations.push(inkFade, expand, exit);
      exit.onfinish = finish;
    }

    void play();

    return () => {
      cancelled = true;
      window.clearTimeout(readyTimeout);
      animations.forEach((animation) => animation.cancel());
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pagehide', finish);
      window.removeEventListener('resize', finish);
      document.removeEventListener('focusin', finish);
      motionPreference.removeEventListener('change', finish);
    };
  }, []);

  return (
    <>
      <div
        id="brand-intro"
        ref={overlayRef}
        className={styles.overlay}
        data-active="false"
        aria-hidden="true"
        suppressHydrationWarning
      >
        <svg className={styles.canvas} width="100%" height="100%" focusable="false">
          <defs>
            <mask id="itagi-intro-cutout" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="white" />
              <text ref={cutoutRef} x="50%" y="50%" className={styles.wordmark} fill="black">
                ITAGI
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#F4F0E8" mask="url(#itagi-intro-cutout)" />
          <text ref={wordmarkRef} x="50%" y="50%" className={styles.wordmark} fill="#481454">
            ITAGI
          </text>
        </svg>
      </div>
      <script
        type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bootstrap }}
      />
    </>
  );
}
