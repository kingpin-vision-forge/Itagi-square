'use client';

import { type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);
CustomEase.create('itagi-reveal', '0.23,1,0.32,1');

/** Opt-in section entrances. Unhydrated and reduced-motion content stays visible. */
export function useScrollReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const root = scope.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add({
      desktop: '(min-width: 768px)',
      mobile: '(max-width: 767px)',
      reduced: '(prefers-reduced-motion: reduce)',
    }, (context) => {
      if (context.conditions!.reduced) return;
      const desktop = context.conditions!.desktop;
      const tweens: gsap.core.Tween[] = [];
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((group) => {
        if (group.getBoundingClientRect().bottom < 0) return;
        const children = group.dataset.reveal === 'children'
          && !(group.dataset.revealMobile === 'self' && !desktop);
        const targets = children
          ? Array.from(group.children).filter((child) => child.getClientRects().length)
          : [group];
        if (!targets.length) return;
        tweens.push(gsap.fromTo(targets, {
          y: desktop ? Number(group.dataset.revealDistance || 24) : 12,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: Number(group.dataset.revealDuration || 0.6),
          stagger: children ? 0.07 : 0,
          ease: 'itagi-reveal',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: group, start: 'top 88%', once: true },
        }));
      });
      // Keyboard focus and carousel controls must never wait for an entrance.
      const finish = () => tweens.forEach((tween) => tween.progress(1));
      root.addEventListener('focusin', finish);
      root.addEventListener('pointerdown', finish);
      return () => {
        root.removeEventListener('focusin', finish);
        root.removeEventListener('pointerdown', finish);
      };
    });
    return () => media.revert();
  }, { scope });
}
