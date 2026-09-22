'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RoomData } from '@/types/room';
import { roomsData } from '@/data/rooms';
import { RoomCard } from '@/components/molecules/room-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface RoomsSuitesSectionProps {
  rooms?: RoomData[];
  className?: string;
  onExploreRoom?: (room: RoomData) => void;
}

export function RoomsSuitesSection({
  rooms = roomsData,
  className,
  onExploreRoom,
}: RoomsSuitesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  }, [rooms.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  }, [rooms.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // Swiped left -> next
      } else {
        handlePrev(); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="rooms"
      className={cn(
        'relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F4F0E8] overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading (Figma Desktop - 3.png) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[0.14em] text-[#1D161F] uppercase leading-tight">
            ROOMS AND SUITES
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#5C5260] font-light tracking-[0.03em] font-sans">
            Thoughtfully designed spaces where contemporary comfort meets effortless relaxation.
          </p>
        </div>

        {/* Carousel & Grid Viewport */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <div className="hidden lg:block absolute -left-2 xl:-left-6 z-20">
            <Button
              variant="icon-circle"
              size="md"
              aria-label="Previous room"
              onClick={handlePrev}
              className="w-12 h-12 shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2]" />
            </Button>
          </div>

          {/* Cards Showcase (Desktop 3-column, Mobile responsive swipe) */}
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full"
          >
            {/* Desktop View: Full 3-column display exactly as in Desktop - 3.png */}
            <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8 items-stretch">
              {rooms.map((room, idx) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  onExplore={onExploreRoom}
                  className={cn(
                    'h-full',
                    idx === activeIndex
                      ? 'ring-2 ring-[#481454]/40 shadow-[0_24px_50px_-12px_rgba(72,20,84,0.35)]'
                      : 'opacity-95'
                  )}
                />
              ))}
            </div>

            {/* Mobile & Tablet Slider */}
            <div className="lg:hidden relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {rooms.map((room) => (
                  <div key={room.id} className="w-full shrink-0 px-2 sm:px-4">
                    <RoomCard room={room} onExplore={onExploreRoom} />
                  </div>
                ))}
              </div>

              {/* Mobile Carousel Controls */}
              <div className="flex items-center justify-between mt-8 px-4">
                <Button
                  variant="icon-circle"
                  size="sm"
                  aria-label="Previous room"
                  onClick={handlePrev}
                  className="w-10 h-10"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2]" />
                </Button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {rooms.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        i === activeIndex
                          ? 'w-8 bg-[#481454]'
                          : 'w-2 bg-[#481454]/30 hover:bg-[#481454]/60'
                      )}
                    />
                  ))}
                </div>

                <Button
                  variant="icon-circle"
                  size="sm"
                  aria-label="Next room"
                  onClick={handleNext}
                  className="w-10 h-10"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <div className="hidden lg:block absolute -right-2 xl:-right-6 z-20">
            <Button
              variant="icon-circle"
              size="md"
              aria-label="Next room"
              onClick={handleNext}
              className="w-12 h-12 shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 stroke-[2]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
