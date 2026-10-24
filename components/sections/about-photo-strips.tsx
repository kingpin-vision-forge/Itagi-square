'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './about-intro-section.module.css';

const exterior = '/images/home-image.jpeg';
const reception = '/images/reception.jpg';
const restaurant = '/images/dining-2.jpeg';
const dastarkhwan = '/images/dastarkhwan.jpeg';
const diningTable = '/images/dining-table.jpeg';
const bedroom = '/images/rooms/room-2.jpeg';
const bedside = '/images/room-4.jpeg';
const desk = '/images/rooms/room-3.jpeg';
const amenities = '/images/rooms/room-1.jpg';
const teaset = '/images/teaset.jpg';

// Extra photographs above and below the viewport keep both moving strips filled.
const strips = [
  [exterior, restaurant, reception, dastarkhwan, exterior, diningTable, reception, restaurant],
  [bedroom, teaset, bedside, desk, amenities, bedroom, teaset, bedside],
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
              {photos.map((src, photoIndex) => (
                <div className={styles.tile} key={`${src}-${photoIndex}`}>
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 35vw, 24vw"
                    quality={90}
                    className={styles.photo}
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
