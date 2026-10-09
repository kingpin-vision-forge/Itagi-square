import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutIntroSection } from '@/components/sections/about-intro-section';
import { RoomsSuitesSection } from '@/components/sections/rooms-suites-section';
import { MoreThanAStaySection } from '@/components/sections/more-than-a-stay-section';
import { CulinaryShowcaseSection } from '@/components/sections/culinary-showcase-section';
import { GuestGuideSection } from '@/components/sections/guest-guide-section';
import { ContactPostcardSection } from '@/components/sections/contact-postcard-section';
import { BrandIntro } from '@/components/sections/brand-intro';
import { absoluteUrl, hotelAddress, siteUrl } from '@/lib/seo';

const title = 'Hotel in Vijayapura | Hotel Itagi Square';
const description =
  'Book Hotel Itagi Square in Vijayapura (Bijapur) for modern rooms and suites, Al-Quds Indo-Arabic dining, banquet facilities and 24/7 concierge service.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Hotel Itagi Square',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero/entrance.png',
        width: 1440,
        height: 1024,
        alt: 'Hotel Itagi Square entrance in Vijayapura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero/entrance.png'],
  },
};

const hotelStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Hotel Itagi Square',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Hotel',
      '@id': `${siteUrl}/#hotel`,
      name: 'Hotel Itagi Square',
      url: siteUrl,
      description,
      image: [
        absoluteUrl('/images/hero/entrance.png'),
        absoluteUrl('/images/rooms/suite-room.png'),
        absoluteUrl('/images/rooms/executive-room.png'),
      ],
      telephone: '+91 81977 88977',
      email: 'hotelitagisquare01@gmail.com',
      address: hotelAddress,
      hasMap:
        'https://www.google.com/maps/search/?api=1&query=Hotel+Itagi+Square+Vijayapura',
      checkinTime: '14:00',
      checkoutTime: '12:00',
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'High-speed Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Car parking', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Banquet hall', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Business centre', value: true },
      ],
      department: {
        '@type': 'Restaurant',
        '@id': `${siteUrl}/alquds#restaurant`,
        name: 'Al-Quds',
        url: absoluteUrl('/alquds'),
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelStructuredData).replace(/</g, '\\u003c'),
        }}
      />
      <BrandIntro />

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
    </main>
  );
}
