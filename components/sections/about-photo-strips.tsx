'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './about-intro-section.module.css';

type Photo = {
  src: string;
  crop?: 'ceiling' | 'stairs' | 'room' | 'lounge' | 'dining';
};

const entrance: Photo = { src: '/images/hero/entrance-clean.png' };
const ceiling: Photo = { src: '/images/about/reference-collage.png', crop: 'ceiling' };
const stairs: Photo = { src: '/images/about/reference-collage.png', crop: 'stairs' };
const dining: Photo = { src: '/images/experiences/dine.png', crop: 'dining' };
const room: Photo = { src: '/images/rooms/executive-room.png', crop: 'room' };
const lounge: Photo = { src: '/images/experiences/unwind.png', crop: 'lounge' };

// Extra photographs above and below the viewport keep both moving strips filled.
const strips = [
  [stairs, dining, entrance, ceiling, stairs, entrance, ceiling, stairs],
  [room, lounge, dining, lounge, room, entrance, room, lounge],
];

export function AboutPhotoStrips() {
  const collageRef = useRef<HTMLDivElement>(null);
  const firstTrackRef = useRef<HTMLDivElement>(null);
  const secondTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const collage = collageRef.current;
    const section = collage?.closest('section');
    const first = firstTrackRef.current;
    const second = secondTrackRef.current;
    if (!collage || !section || !first || !second) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let inView = false;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches) return;
      const bounds = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1,
        (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)
      ));
      const travel = Math.min(collage.clientWidth * 0.24, 320);
      const offset = (progress - 0.5) * travel;
      // The parent rotates these local vertical translations along the diagonal rails.
      first.style.transform = `translate3d(0, ${-offset}px, 0)`;
      second.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const scheduleUpdate = () => {
      if (inView && !reducedMotion.matches && !frame) {
        frame = window.requestAnimationFrame(update);
      }
    };
    const syncMotionPreference = () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.cancelAnimationFrame(frame);
      frame = 0;
      if (reducedMotion.matches) {
        first.style.removeProperty('transform');
        second.style.removeProperty('transform');
      } else {
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        scheduleUpdate();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      scheduleUpdate();
    });
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    observer.observe(section);
    resizeObserver.observe(collage);
    reducedMotion.addEventListener('change', syncMotionPreference);
    window.addEventListener('resize', scheduleUpdate);
    syncMotionPreference();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotion.removeEventListener('change', syncMotionPreference);
      observer.disconnect();
      resizeObserver.disconnect();
      first.style.removeProperty('transform');
      second.style.removeProperty('transform');
    };
  }, []);

  return (
    <div ref={collageRef} className={styles.collage} aria-hidden="true">
      <div className={styles.rails}>
        {strips.map((photos, index) => (
          <div className={styles.lane} key={index}>
            <div
              ref={index === 0 ? firstTrackRef : secondTrackRef}
              className={styles.track}
              data-scroll-direction={index === 0 ? 'up' : 'down'}
            >
              {photos.map((photo, photoIndex) => (
                <div className={styles.tile} key={`${photo.src}-${photoIndex}`}>
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes={photo.crop === 'ceiling' || photo.crop === 'stairs'
                      ? '100vw'
                      : '(max-width: 639px) 35vw, 24vw'}
                    quality={100}
                    className={`${styles.photo} ${photo.crop ? styles[photo.crop] : ''}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
