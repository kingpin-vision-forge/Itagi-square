"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export interface AlQudsScrollMotionProps {
  children: ReactNode;
}

/*
 * Scroll choreography for the Al-Quds page, driven by data attributes so the
 * page itself stays a server component:
 *
 *   data-scroll-hero / -hero-media / -hero-content  scrubbed hero exit
 *   data-scroll-cascade   heading lines rise, remaining children follow
 *   data-scroll-heading   masked line reveal (standalone or inside a cascade)
 *   data-scroll-lines     paragraph fades up line by line
 *   data-scroll-track     eyebrow letters close in from wide tracking
 *   data-scroll-reveal    simple fade-up
 *   data-scroll-stagger + data-scroll-item          staggered group
 *   data-scroll-clip="frame" | "wipe"               scrubbed clip-path reveal
 *   data-scroll-media     scrubbed zoom-out + parallax on an image
 *   data-scroll-oval      oval portrait tilts into place
 *   data-scroll-parallax  image drifts inside its frame
 *   data-scroll-drift="left" | "right"              gallery row nudge
 */
export function AlQudsScrollMotion({ children }: AlQudsScrollMotionProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          if (!context.conditions?.motion) return;

          const desktop = Boolean(context.conditions.desktop);
          const distance = desktop ? 24 : 12;
          const select = <T extends HTMLElement>(selector: string) =>
            gsap.utils.toArray<T>(selector, root.current);

          // Hero: content lifts away faster than the photograph behind it.
          select("[data-scroll-hero]").forEach((hero) => {
            gsap
              .timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              })
              .to(
                hero.querySelector("[data-scroll-hero-media]"),
                { yPercent: 16, scale: 1.08 },
                0,
              )
              // Explicit start: the intro below holds the copy hidden behind the loader.
              .fromTo(
                hero.querySelector("[data-scroll-hero-content]"),
                { yPercent: 0, autoAlpha: 1 },
                { yPercent: -28, autoAlpha: 0 },
                0,
              );
          });

          // Hero intro: once the loader lifts, the headline rises word by word.
          // Built paused (and rebuilt by autoSplit on reflow), then played on ready.
          const cleanups: (() => void)[] = [];
          select("[data-scroll-hero-content]").forEach((content) => {
            const title = content.querySelector<HTMLElement>("h1");
            if (!title) return;
            const followers = Array.from(content.children).filter(
              (child) => child !== title,
            );
            let ready = Boolean(document.documentElement.dataset.alqudsReady);
            let intro: gsap.core.Timeline | undefined;

            SplitText.create(title, {
              type: "lines,words",
              mask: "lines",
              autoSplit: true,
              onSplit(self) {
                gsap.set(self.masks, {
                  paddingBlock: "0.1em",
                  marginBlock: "-0.1em",
                  paddingInline: "0.08em",
                  marginInline: "-0.08em",
                });
                intro = gsap
                  .timeline({ paused: true, delay: 0.25 })
                  .fromTo(
                    self.words,
                    { yPercent: 115, rotation: 3 },
                    {
                      yPercent: 0,
                      rotation: 0,
                      duration: 1.2,
                      stagger: 0.07,
                      ease: "expo.out",
                    },
                  )
                  .fromTo(
                    followers,
                    { autoAlpha: 0, y: distance },
                    {
                      autoAlpha: 1,
                      y: 0,
                      duration: 0.8,
                      stagger: 0.12,
                      ease: "power3.out",
                    },
                    0.45,
                  );
                if (ready) intro.play();
                return intro;
              },
            });

            const onReady = () => {
              ready = true;
              intro?.play();
            };
            window.addEventListener("alquds:ready", onReady, { once: true });
            cleanups.push(() =>
              window.removeEventListener("alquds:ready", onReady),
            );
          });

          const splitLines = (
            heading: HTMLElement,
            onSplit: (lines: Element[]) => gsap.core.Animation,
          ) =>
            SplitText.create(heading, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit(self) {
                // Breathing room so italic overhangs and descenders aren't clipped.
                gsap.set(self.masks, {
                  paddingBlock: "0.1em",
                  marginBlock: "-0.1em",
                  paddingInline: "0.08em",
                  marginInline: "-0.08em",
                });
                return onSplit(self.lines);
              },
            });

          const riseLines = (lines: Element[]) =>
            gsap.fromTo(
              lines,
              { yPercent: 110 },
              { yPercent: 0, duration: 1, stagger: 0.09, ease: "expo.out" },
            );

          const cascade = (container: HTMLElement, lines: Element[]) => {
            // Children with their own text animation are left to it.
            const rest = Array.from(container.children).filter(
              (child) =>
                !child.matches(
                  "[data-scroll-heading], [data-scroll-lines], [data-scroll-track]",
                ),
            ) as HTMLElement[];
            const rules = rest.filter((child) => child.tagName === "HR");
            const blocks = rest.filter((child) => child.tagName !== "HR");

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                start: "clamp(top 85%)",
                once: true,
              },
            });

            if (lines.length) timeline.add(riseLines(lines), 0);
            if (blocks.length) {
              timeline.fromTo(
                blocks,
                { autoAlpha: 0, y: distance },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.75,
                  stagger: 0.08,
                  ease: "power3.out",
                  clearProps: "transform,opacity,visibility",
                },
                lines.length ? 0.2 : 0,
              );
            }
            if (rules.length) {
              timeline.fromTo(
                rules,
                { scaleX: 0, transformOrigin: "left center" },
                { scaleX: 1, duration: 1.1, ease: "power3.inOut" },
                0.25,
              );
            }
            return timeline;
          };

          select("[data-scroll-cascade]").forEach((container) => {
            const heading = container.querySelector<HTMLElement>(
              ":scope > [data-scroll-heading]",
            );
            if (heading) {
              splitLines(heading, (lines) => cascade(container, lines));
            } else {
              cascade(container, []);
            }
          });

          select("[data-scroll-heading]")
            .filter(
              (heading) =>
                !heading.parentElement?.closest("[data-scroll-cascade]"),
            )
            .forEach((heading) => {
              splitLines(heading, (lines) =>
                gsap
                  .timeline({
                    scrollTrigger: {
                      trigger: heading,
                      start: "clamp(top 88%)",
                      once: true,
                    },
                  })
                  .add(riseLines(lines)),
              );
            });

          select("[data-scroll-lines]").forEach((paragraph) => {
            SplitText.create(paragraph, {
              type: "lines",
              autoSplit: true,
              onSplit: (self) =>
                gsap.fromTo(
                  self.lines,
                  { autoAlpha: 0, y: desktop ? 18 : 10 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.15,
                    scrollTrigger: {
                      trigger: paragraph,
                      start: "clamp(top 90%)",
                      once: true,
                    },
                  },
                ),
            });
          });

          select("[data-scroll-track]").forEach((label) => {
            gsap.from(label, {
              autoAlpha: 0,
              letterSpacing: "0.5em",
              duration: 1.3,
              ease: "power3.out",
              clearProps: "letterSpacing,opacity,visibility",
              scrollTrigger: {
                trigger: label,
                start: "clamp(top 90%)",
                once: true,
              },
            });
          });

          select("[data-scroll-reveal]").forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: distance },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                  trigger: element,
                  start: "clamp(top 88%)",
                  once: true,
                },
              },
            );
          });

          select("[data-scroll-stagger]").forEach((group) => {
            const items = gsap.utils.toArray<HTMLElement>(
              "[data-scroll-item]",
              group,
            );

            gsap.fromTo(
              items,
              { autoAlpha: 0, y: distance },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.07,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                  trigger: group,
                  start: "clamp(top 84%)",
                  once: true,
                },
              },
            );
          });

          // Photographs open up as they travel into view.
          select("[data-scroll-clip]").forEach((frame) => {
            const from =
              frame.dataset.scrollClip === "wipe"
                ? "inset(0% 100% 0% 0%)"
                : "inset(12% 10% 12% 10%)";

            gsap.fromTo(
              frame,
              { clipPath: from },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "clamp(top 92%)",
                  end: desktop ? "top 35%" : "top 55%",
                  scrub: 0.6,
                },
              },
            );
          });

          // Images settle back to size and drift slightly while passing through.
          select("[data-scroll-media]").forEach((image) => {
            gsap.fromTo(
              image,
              { scale: desktop ? 1.16 : 1.1, yPercent: -3 },
              {
                scale: desktop ? 1.07 : 1.04,
                yPercent: desktop ? 3 : 1.5,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "clamp(top bottom)",
                  end: "clamp(bottom top)",
                  scrub: 0.6,
                },
              },
            );
          });

          select("[data-scroll-oval]").forEach((oval) => {
            gsap.fromTo(
              oval,
              { rotation: 2, scale: 0.88, autoAlpha: 0 },
              {
                rotation: 12,
                scale: 1,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: oval,
                  start: "clamp(top 95%)",
                  end: "center 55%",
                  scrub: 0.8,
                },
              },
            );
          });

          select("[data-scroll-parallax]").forEach((image) => {
            gsap.fromTo(
              image,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "clamp(top bottom)",
                  end: "clamp(bottom top)",
                  scrub: true,
                },
              },
            );
          });

          // Offsets stay ≤ 0 so the marquee track never exposes its left edge.
          select("[data-scroll-drift]").forEach((row) => {
            const travel = desktop ? -140 : -70;
            const leftward = row.dataset.scrollDrift === "left";

            gsap.fromTo(
              row,
              { x: leftward ? 0 : travel },
              {
                x: leftward ? travel : 0,
                ease: "none",
                scrollTrigger: {
                  trigger: row,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          });

          return () => cleanups.forEach((cleanup) => cleanup());
        },
      );

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <main id="main" ref={root}>
      {children}
    </main>
  );
}
