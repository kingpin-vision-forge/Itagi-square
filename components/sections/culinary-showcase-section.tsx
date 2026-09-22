'use client';

import React from 'react';
import Link from 'next/link';
import { diningData } from '@/data/culinary';
import { CurvedRibbonGallery } from '@/components/molecules/curved-ribbon-gallery';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CulinaryShowcaseSectionProps {
  className?: string;
  onExplore?: () => void;
}

export function CulinaryShowcaseSection({
  className,
  onExplore,
}: CulinaryShowcaseSectionProps) {
  const { title, subtitle, ribbonImage, ctaLabel, ctaHref } = diningData;

  const handleCtaClick = () => {
    if (onExplore) {
      onExplore();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="dining"
      className={cn(
        'relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F4F0E8] overflow-hidden border-t border-[#CFC2AE]/50',
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Section Heading (Figma Frame 39.png) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[0.14em] text-[#1D161F] uppercase leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#5C5260] font-light tracking-[0.03em] font-sans max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Curvilinear Arc Ribbon Gallery */}
        <div className="w-full mb-10 sm:mb-14">
          <CurvedRibbonGallery imageSrc={ribbonImage} />
        </div>

        {/* Centered CTA Pill Button (Figma Frame 39.png) */}
        <div className="flex justify-center">
          <Link href={ctaHref || '#contact'}>
            <Button
              variant="purple-pill"
              size="lg"
              onClick={handleCtaClick}
              className="px-10 py-3.5 tracking-[0.18em] text-xs font-semibold uppercase shadow-[0_6px_20px_rgba(72,20,84,0.3)] hover:shadow-[0_10px_28px_rgba(72,20,84,0.4)]"
            >
              {ctaLabel || 'EXPLORE ITAGI'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
