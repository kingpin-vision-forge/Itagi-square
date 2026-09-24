import React from 'react';
import Link from 'next/link';
import { NewsletterForm } from '@/components/molecules/newsletter-form';

export function BrandFooter() {
  return (
    <footer
      className="w-full bg-gradient-to-b from-[#2B0736] via-[#24052E] to-[#16021D] text-white pt-20 md:pt-28 pb-0 transition-colors"
      aria-label="Hotel Itagi Square Global Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* ========================================================================= */}
        {/* TOP SECTION: BRAND INFO, CONTACTS, QUICK LINKS, NEWSLETTER                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-3xl sm:text-4xl font-uncial tracking-[0.12em] uppercase font-normal text-white hover:text-[#EADBEE] transition-colors"
            >
              ITAGI
            </Link>
            <div className="mt-8">
              <h4 className="text-sm font-serif tracking-wider uppercase text-[#D5C4DB] mb-3">
                Socials
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A390AB] font-sans">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Booking Contacts & Customer Support */}
          <div className="flex flex-col">
            <h4 className="text-xs sm:text-sm font-serif uppercase tracking-[0.14em] text-[#EEDBEE] mb-4">
              FOR BOOKING CONTACT
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#D5C4DB] font-sans mb-8">
              <p>
                <a
                  href="tel:18009001200"
                  className="hover:text-white transition-colors"
                >
                  1-800-900-1200 (Toll Free)
                </a>
              </p>
              <p>
                <a
                  href="tel:+918323500700"
                  className="hover:text-white transition-colors"
                >
                  +91 8323500700 / +91 123 456 7890
                </a>
              </p>
              <p>
                <a
                  href="mailto:reservations@itagisquare.com"
                  className="hover:text-white transition-colors"
                >
                  reservations@itagisquare.com
                </a>
              </p>
            </div>

            <h4 className="text-xs sm:text-sm font-serif uppercase tracking-[0.14em] text-[#EEDBEE] mb-3">
              CUSTOMER SUPPORT
            </h4>
            <p className="text-xs sm:text-sm text-[#D5C4DB] font-sans">
              <a
                href="mailto:contact@itagi.com"
                className="hover:text-white transition-colors"
              >
                contact@itagi.com
              </a>
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-xs sm:text-sm font-serif uppercase tracking-[0.14em] text-[#EEDBEE] mb-4">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-[#D5C4DB] font-sans">
              <div className="space-y-2.5">
                <p>
                  <Link href="#rooms" className="hover:text-white transition-colors">
                    Hotel & Suites
                  </Link>
                </p>
                <p>
                  <Link href="#dining" className="hover:text-white transition-colors">
                    Dining
                  </Link>
                </p>
                <p>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Itagi
                  </Link>
                </p>
                <p>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Meetings & Conferences
                  </Link>
                </p>
                <p>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </p>
              </div>
              <div className="space-y-2.5">
                <p>
                  <Link href="#dining" className="hover:text-white transition-colors">
                    Order Online
                  </Link>
                </p>
                <p>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Book a Reservation
                  </Link>
                </p>
                <p>
                  <Link href="#guide" className="hover:text-white transition-colors">
                    Guest Policies
                  </Link>
                </p>
                <p>
                  <Link href="#guide" className="hover:text-white transition-colors">
                    Amenities Guide
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CENTER MONUMENTAL WORDMARK FRAMED BY DELICATE HAIRLINES                   */}
      {/* ========================================================================= */}
      <div className="w-full border-t border-white/15 my-8 md:my-14" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 text-center py-6 md:py-10">
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-uncial tracking-[0.1em] uppercase font-normal text-white select-none leading-none">
          ITAGI
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl font-serif italic tracking-[0.12em] text-[#EADBEE] mt-3 md:mt-6 select-none font-light">
          hospitality & retail
        </p>
      </div>

      <div className="w-full border-b border-white/15 mb-8 md:mb-10" />

      {/* ========================================================================= */}
      {/* BOTTOM LEGAL & COPYRIGHT BAR                                              */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A390AB] font-sans">
        <p className="tracking-wide text-center md:text-left">
          © 2026 Hotel Itagi Square. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 tracking-wide">
          <Link href="#terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <span>|</span>
          <Link href="#privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="#cookie" className="hover:text-white transition-colors">
            Cookie Policy
          </Link>
          <span>|</span>
          <Link href="#accessibility" className="hover:text-white transition-colors">
            Accessibility
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CREATIVE AGENCY WATERMARK BAR (KINGPIN VISION FORGE from Frame 42.png)    */}
      {/* ========================================================================= */}
      <div className="w-full bg-white py-6 px-4 flex flex-col items-center justify-center border-t border-gray-200 select-none">
        <div className="flex items-center font-material-rounded text-xl sm:text-2xl font-bold tracking-[0.3em]">
          <span className="text-red-600">K</span>
          <span className="text-black">INGPI</span>
          <span className="text-blue-600">N</span>
        </div>
        <span className="font-luxurious text-lg sm:text-xl text-gray-700 tracking-[0.05em] -mt-1">
          Vision Forge
        </span>
      </div>
    </footer>
  );
}
