import React from 'react';
import { AmenityGroup } from '@/types/guide';
import { cn } from '@/lib/utils';

export interface AmenityColumnProps {
  group: AmenityGroup;
  className?: string;
}

export function AmenityColumn({ group, className }: AmenityColumnProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* Category Header */}
      <h3 className="text-base sm:text-lg font-serif font-medium tracking-[0.12em] text-[#1D161F] uppercase pb-3 border-b border-[#CFC2AE]">
        {group.category}
      </h3>

      {/* Clean editorial Amenity List */}
      <div className="mt-4 space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#4A4036] font-sans">
        {group.items.map((amenity, index) => (
          <p key={index} className="leading-snug text-[#4A4036]">
            {amenity}
          </p>
        ))}
      </div>
    </div>
  );
}
