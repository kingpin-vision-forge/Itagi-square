import React from 'react';
import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { RoomsSuitesSection } from '@/components/sections/rooms-suites-section';
import { MoreThanAStaySection } from '@/components/sections/more-than-a-stay-section';
import { Button } from '@/components/ui/button';
import { UnderlineInput } from '@/components/ui/underline-input';
import { RoomSpecBadge } from '@/components/ui/room-spec-badge';
import { VintageDivider } from '@/components/ui/vintage-divider';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#1D161F] flex flex-col selection:bg-[#481454] selection:text-white">
      {/* Frosted Glass Luxury Navigation Bar */}
      <Navbar />

      {/* Hero Entrance Section */}
      <HeroSection />

      {/* Rooms & Suites Showcase Section (Figma Desktop - 3.png) */}
      <RoomsSuitesSection />

      {/* "More Than A Stay" 4-Pillar Grid (Figma Frame 36.png) */}
      <MoreThanAStaySection />

      {/* Component & Design Primitives Showcase */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#481454] font-semibold">
            Phase 6 Complete
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 tracking-wide text-[#1D161F]">
            More Than A Stay Lifestyle Pillars
          </h2>
          <p className="mt-4 text-sm text-[#5C5260] font-sans">
            UNWIND, DINE, EXPLORE, and CONNECT cards with smooth hover zoom and navigation controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Button Variants */}
          <div className="bg-[#DDD3C3]/40 border border-[#CFC2AE] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-serif tracking-wider uppercase text-[#481454] mb-4">
                Button Primitives
              </h3>
              <div className="flex flex-col gap-4 items-start">
                <Button variant="hero-pill">Hero Pill ("Book Now")</Button>
                <Button variant="purple-pill">Purple Pill ("Explore Itagi")</Button>
                <Button variant="vintage-ticket">Vintage Ticket ("Send ⇒")</Button>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-[#5C5260] uppercase tracking-wider">Icon Circles:</span>
                  <Button variant="icon-circle" size="sm">‹</Button>
                  <Button variant="icon-circle" size="md">›</Button>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#5C5260] mt-6">
              Tailwind v4 tokens with smooth hover micro-animations.
            </p>
          </div>

          {/* Card 2: Room Spec Badges */}
          <div className="bg-[#DDD3C3]/40 border border-[#CFC2AE] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-serif tracking-wider uppercase text-[#481454] mb-4">
                Suite Spec Badges
              </h3>
              <div className="flex flex-col gap-4 py-2">
                <div className="p-3 bg-[#F4F0E8] rounded-xl border border-[#CFC2AE]/60">
                  <RoomSpecBadge type="area" label="21 sq m" />
                </div>
                <div className="p-3 bg-[#F4F0E8] rounded-xl border border-[#CFC2AE]/60">
                  <RoomSpecBadge type="bed" label="King Bed" />
                </div>
                <div className="p-3 bg-[#F4F0E8] rounded-xl border border-[#CFC2AE]/60">
                  <RoomSpecBadge type="guests" label="Up to 3 guests" />
                </div>
              </div>
            </div>
            <p className="text-xs text-[#5C5260] mt-6">
              Iconographic badges extracted directly from Desktop - 3.png.
            </p>
          </div>

          {/* Card 3: Vintage Botanical Divider & Inputs */}
          <div className="bg-[#DDD3C3]/40 border border-[#CFC2AE] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-serif tracking-wider uppercase text-[#481454] mb-4">
                Postcard Spine & Inputs
              </h3>
              <div className="space-y-4">
                <UnderlineInput label="Guest Name" placeholder="e.g. Eleanor Vance" />
                <UnderlineInput label="Mobile Number" placeholder="+91 98765 43210" />
                <div className="pt-2">
                  <VintageDivider orientation="horizontal" />
                </div>
              </div>
            </div>
            <p className="text-xs text-[#5C5260] mt-4">
              Vintage engraved rosehip botanical illustration from Frame 41.png.
            </p>
          </div>
        </div>
      </section>

      {/* Royal Purple Footer Banner */}
      <footer className="mt-auto bg-gradient-to-b from-[#2B0736] to-[#1A0322] text-white py-12 px-6 text-center border-t border-[#481454]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-3xl sm:text-4xl font-serif tracking-[0.25em] font-medium text-white">
            ITAGI
          </div>
          <div className="text-xs tracking-[0.3em] uppercase text-[#D5C4DB] mt-2 font-serif italic">
            Hospitalities & Retails
          </div>
          <p className="text-xs text-[#D5C4DB]/70 mt-6 tracking-wider">
            © 2026 Hotel Itagi Square. All Rights Reserved. · Designed with Kingpin Vision Forge
          </p>
        </div>
      </footer>
    </main>
  );
}
