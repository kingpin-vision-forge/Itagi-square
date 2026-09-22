'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CurvedRibbonGalleryProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export function CurvedRibbonGallery({
  imageSrc = '/images/dining/ribbon-full.png',
  alt = 'Gourmet Indo-Arabic Dishes at Hotel Itagi Square',
  className,
}: CurvedRibbonGalleryProps) {
  return (
    <div className={cn('relative w-full overflow-hidden py-4 sm:py-6', className)}>
      {/* 
        Curvilinear Architectural Arc Ribbon (Figma Frame 39.png)
        Using CSS curved border radiuses and responsive container 
      */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[3/1] max-h-[520px] rounded-[30px] sm:rounded-[60px] md:rounded-[100px] overflow-hidden shadow-[0_16px_40px_-10px_rgba(0,0,0,0.2)] border border-[#CFC2AE]/60 bg-[#2B0736]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] hover:scale-[1.05] transition-transform duration-700 ease-out"
        />

        {/* Subtle Edge Vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
