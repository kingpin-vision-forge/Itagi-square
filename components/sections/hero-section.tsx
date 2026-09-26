'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    if (!section || !image || !title) return;

    const media = gsap.matchMedia();
    media.add({
      desktop: '(min-width: 768px)',
      mobile: '(max-width: 767px)',
      reducedMotion: '(prefers-reduced-motion: reduce)',
    }, (context) => {
      const { desktop, reducedMotion } = context.conditions!;
      // Keep the original, fully visible hero when motion is reduced.
      if (reducedMotion) return;

      // The section scrolls normally; only its image and heading animate.
      // A separate wrapper preserves the title's original -16px layout offset.
      gsap.timeline({
        defaults: { ease: 'none', duration: 1 },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${section.offsetHeight * 0.8}`,
          scrub: desktop ? 0.5 : 0.3,
          invalidateOnRefresh: true,
        },
      })
        .to(image, { scale: desktop ? 1.06 : 1.03 }, 0)
        .to(title, { y: desktop ? -24 : -12, opacity: 0 }, 0);
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className={cn(
        'relative flex min-h-[480px] h-[100svh] w-full items-center justify-center overflow-hidden',
        className
      )}
    >
      <Image
        ref={imageRef}
        src="/images/hero/hotel-exterior.png"
        alt="Hotel Itagi Square entrance framed by palms, with warmly lit doors and steps"
        fill
        preload
        quality={92}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 -translate-y-4">
        <h1
          ref={titleRef}
          id="hero-title"
          className="flex flex-col items-center px-4 text-center font-normal leading-none tracking-normal text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          <span className="block text-[clamp(64px,9.722vw,140px)]">HOTEL</span>
          <span className="block whitespace-nowrap text-[clamp(40px,7.222vw,104px)]">
            ITAGI SQUARE
          </span>
        </h1>
      </div>
    </section>
  );
}
