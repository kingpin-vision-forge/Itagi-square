import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative w-full h-[100dvh] min-h-[680px] max-h-[1100px] flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Full-bleed Architectural Facade Photograph */}
      <Image
        src="/images/hero/entrance.png"
        alt="Hotel Itagi Square Grand Entrance and Facade"
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-center scale-[1.02] transition-transform duration-1000"
      />

      {/* Layered Ambient Dark Vignette & Gradient Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/65 z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%] z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Luxury Headline & Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Eyebrow / Tagline */}
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs tracking-[0.25em] text-[#F4F0E8] uppercase font-serif">
          <span>High Cuisine</span>
          <span className="w-1 h-1 rounded-full bg-[#ADCDEE]" />
          <span>Indo-Arabic Taste</span>
          <span className="w-1 h-1 rounded-full bg-[#ADCDEE]" />
          <span>Luxury Stays</span>
        </div>

        {/* Monumental All-Caps Serif Headline (Figma Desktop - 1.png) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-serif font-normal tracking-[0.16em] sm:tracking-[0.20em] text-white uppercase leading-[1.08] drop-shadow-lg max-w-5xl">
          HOTEL
          <span className="block mt-1 sm:mt-2">ITAGI SQUARE</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F4F0E8]/90 max-w-2xl font-light tracking-[0.06em] font-sans">
          Thoughtfully designed spaces where contemporary comfort meets effortless relaxation.
        </p>

        {/* Hero CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <Link href="#rooms">
            <Button
              variant="hero-pill"
              size="lg"
              className="px-8 py-3.5 tracking-[0.16em] font-medium shadow-lg hover:shadow-xl"
            >
              EXPLORE SUITES
            </Button>
          </Link>
          <Link href="#dining">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3.5 tracking-[0.16em] border-white/80 text-white hover:bg-white/20 hover:border-white shadow-md"
            >
              OUR DINING
            </Button>
          </Link>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity">
        <Link
          href="#rooms"
          aria-label="Scroll to Rooms & Suites"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-serif">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
