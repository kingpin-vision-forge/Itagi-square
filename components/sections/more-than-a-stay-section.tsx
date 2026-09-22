import React from 'react';
import { experiencesSection } from '@/data/experiences';
import { PillarCard } from '@/components/molecules/pillar-card';
import { cn } from '@/lib/utils';

export interface MoreThanAStaySectionProps {
  className?: string;
}

export function MoreThanAStaySection({ className }: MoreThanAStaySectionProps) {
  const { title, subtitle, pillars } = experiencesSection;

  return (
    <section
      id="experiences"
      className={cn(
        'relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#E8E2D5] border-t border-[#CFC2AE]/50 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header (Figma Frame 36.png) */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[0.14em] text-[#1D161F] uppercase leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#5C5260] font-light tracking-[0.03em] font-sans max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* 4-Pillar Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
