'use client';

import React from 'react';
import Image from 'next/image';
import { RoomData } from '@/types/room';
import { RoomSpecBadge } from '@/components/ui/room-spec-badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface RoomCardProps {
  room: RoomData;
  className?: string;
  onExplore?: (room: RoomData) => void;
}

export function RoomCard({ room, className, onExplore }: RoomCardProps) {
  const handleExplore = () => {
    if (onExplore) {
      onExplore(room);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <article
      className={cn(
        // Outer Two-Tone Wrapper with Imperial Purple framing
        'group relative flex flex-col bg-[#481454] p-3 sm:p-4 rounded-3xl shadow-[0_12px_36px_-8px_rgba(72,20,84,0.18)] transition-all duration-500 hover:shadow-[0_20px_48px_-10px_rgba(72,20,84,0.3)] hover:-translate-y-1',
        className
      )}
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#2B0736]">
        <Image
          src={room.image}
          alt={room.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle top image vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Inner Card Face in Warm Sand */}
      <div className="mt-3 flex-1 flex flex-col justify-between bg-[#DDD3C3] rounded-2xl p-6 sm:p-7 transition-colors duration-300">
        <div>
          {/* Room Title */}
          <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-[0.12em] text-[#481454] uppercase">
            {room.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#2C232F] font-sans">
            {room.description}
          </p>

          {/* Key Specs Row with Icons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 border-t border-[#CFC2AE]">
            <RoomSpecBadge type="area" label={room.area} />
            <RoomSpecBadge type="bed" label={room.bedType} />
            <RoomSpecBadge type="guests" label={room.maxGuests} />
          </div>
        </div>

        {/* Action Button: EXPLORE ITAGI */}
        <div className="mt-7 pt-2 flex justify-center">
          <Button
            variant="purple-pill"
            size="md"
            onClick={handleExplore}
            className="w-full sm:w-auto px-8 py-2.5 tracking-[0.16em] text-xs font-semibold uppercase shadow-md hover:shadow-lg"
          >
            {room.ctaText || 'EXPLORE ITAGI'}
          </Button>
        </div>
      </div>
    </article>
  );
}
