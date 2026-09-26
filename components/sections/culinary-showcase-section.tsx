'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { diningData } from '@/data/culinary';
import { CurvedRibbonGallery } from '@/components/molecules/curved-ribbon-gallery';
import { cn } from '@/lib/utils';
import styles from './culinary-showcase-section.module.css';

export interface CulinaryShowcaseSectionProps {
  className?: string;
  onExplore?: () => void;
}

export function CulinaryShowcaseSection({ className, onExplore }: CulinaryShowcaseSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  const { title, subtitle, ribbonImage, ctaLabel, ctaHref } = diningData;

  return (
    <section ref={sectionRef} id="dining" aria-labelledby="dining-heading" className={cn(styles.section, className)}>
      <div data-reveal="children" className={styles.intro}>
        <h2 id="dining-heading" className={styles.heading}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <CurvedRibbonGallery imageSrc={ribbonImage} className={styles.ribbon} />
      <div className={styles.action}>
        {onExplore ? (
          <button type="button" onClick={onExplore} className={styles.button}>{ctaLabel}</button>
        ) : (
          <a href={ctaHref || '#contact'} className={styles.button}>{ctaLabel}</a>
        )}
      </div>
    </section>
  );
}
