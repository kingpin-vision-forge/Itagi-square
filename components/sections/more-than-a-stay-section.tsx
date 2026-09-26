'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiencesSection } from '@/data/experiences';
import { PillarCard } from '@/components/molecules/pillar-card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import styles from './more-than-a-stay-section.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface MoreThanAStaySectionProps {
  className?: string;
}

export function MoreThanAStaySection({ className }: MoreThanAStaySectionProps) {
  const { title, subtitle, pillars } = experiencesSection;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const media = gsap.matchMedia();
    // Short laptop windows, touch devices, and reduced motion retain the grid.
    media.add('(min-width: 1024px) and (min-height: 700px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      section.dataset.pinned = 'true';
      const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * 1.8}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      const trigger = tween.scrollTrigger!;
      const focusPanel = (event: FocusEvent) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const panel = target.closest<HTMLElement>('[data-experience-panel]');
        if (!panel) return;
        // Bring keyboard-focused links into view immediately, without a scrub delay.
        section.scrollLeft = 0;
        const progress = Math.min(1, Math.max(0, panel.offsetLeft / distance()));
        window.scrollTo({ top: trigger.start + progress * (trigger.end - trigger.start), behavior: 'instant' });
        trigger.update();
        trigger.getTween()?.progress(1);
        tween.progress(progress);
      };
      track.addEventListener('focusin', focusPanel);
      return () => {
        track.removeEventListener('focusin', focusPanel);
        delete section.dataset.pinned;
      };
    });
    // Pin spacing changes the positions of every section below it.
    let active = true;
    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    void document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
    return () => {
      active = false;
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="experiences" aria-labelledby="experiences-heading" className={cn(styles.section, className)}>
      <div className={styles.inner}>
        <div data-reveal="children" className={styles.intro}>
          <h2 id="experiences-heading" className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[0.14em] text-[#1D161F] uppercase leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#5C5260] font-light tracking-[0.03em] font-sans max-w-2xl">
            {subtitle}
          </p>
        </div>
        <div ref={trackRef} className={styles.track}>
          {pillars.map((pillar) => (
            <div key={pillar.id} data-experience-panel className={styles.panel}>
              <PillarCard pillar={pillar} className={styles.card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
