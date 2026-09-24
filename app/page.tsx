import React from 'react';
import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutIntroSection } from '@/components/sections/about-intro-section';
import { RoomsSuitesSection } from '@/components/sections/rooms-suites-section';
import { MoreThanAStaySection } from '@/components/sections/more-than-a-stay-section';
import { CulinaryShowcaseSection } from '@/components/sections/culinary-showcase-section';
import { GuestGuideSection } from '@/components/sections/guest-guide-section';
import { ContactPostcardSection } from '@/components/sections/contact-postcard-section';
import { BrandFooter } from '@/components/sections/brand-footer';
import { BrandIntro } from '@/components/sections/brand-intro';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#1D161F] flex flex-col selection:bg-[#481454] selection:text-white">
      <BrandIntro />
      {/* Frosted Glass Luxury Navigation Bar */}
      <Navbar />

      {/* Hero Entrance Section (Figma Desktop - 1.png) */}
      <HeroSection />

      {/* About Section (context/about.png) */}
      <AboutIntroSection />

      {/* Rooms & Suites Showcase Section (Figma Desktop - 3.png) */}
      <RoomsSuitesSection />

      {/* "More Than A Stay" 4-Pillar Grid (Figma Frame 36.png) */}
      <MoreThanAStaySection />

      {/* Culinary Showcase Arc Ribbon (Figma Frame 39.png) */}
      <CulinaryShowcaseSection />

      {/* Guest Information & Amenities Guide (Figma Frame 72.png) */}
      <GuestGuideSection />

      {/* Vintage Postcard Contact & Reservation Form (Figma Frame 41.png) */}
      <ContactPostcardSection />

      {/* Royal Purple Brand Footer (Figma Frame 42.png) */}
      <BrandFooter />
    </main>
  );
}
