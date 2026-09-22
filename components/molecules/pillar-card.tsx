'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ExperiencePillar } from '@/types/experience';
import { cn } from '@/lib/utils';

export interface PillarCardProps {
  pillar: ExperiencePillar;
  className?: string;
  onClick?: (pillar: ExperiencePillar) => void;
}

export function PillarCard({ pillar, className, onClick }: PillarCardProps) {
  const content = (
    <div
      className={cn(
        'group relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(72,20,84,0.22)] hover:-translate-y-1.5 cursor-pointer bg-[#2B0736]',
        className
      )}
      onClick={() => onClick && onClick(pillar)}
    >
      {/* Background Photography */}
      <Image
        src={pillar.image}
        alt={pillar.alt || pillar.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Ambient Gradient Overlays for High Legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Bottom Bar: Title & Circular Arrow Button (Frame 36.png) */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between z-10">
        <div>
          {pillar.subtitle && (
            <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#ADCDEE] font-medium mb-1">
              {pillar.subtitle}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif tracking-[0.14em] text-white uppercase italic sm:not-italic group-hover:italic transition-all">
            {pillar.title}
          </h3>
        </div>

        {/* Circular Action Button with Right Arrow */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#1D161F] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ADCDEE] group-hover:text-[#1D161F]">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );

  if (pillar.href) {
    return (
      <Link href={pillar.href} className="block focus:outline-none focus:ring-2 focus:ring-[#481454] rounded-3xl">
        {content}
      </Link>
    );
  }

  return content;
}
