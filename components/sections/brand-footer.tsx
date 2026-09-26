'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import Link from 'next/link';
import { NewsletterForm } from '@/components/molecules/newsletter-form';

export function BrandFooter() {
  const footerRef = useRef<HTMLElement>(null);
  useScrollReveal(footerRef);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[radial-gradient(ellipse_at_85%_15%,_#4E1360_0%,_#30093E_45%,_#1C0324_100%)] text-white pt-16 md:pt-24 pb-0 transition-colors"
      aria-label="Hotel Itagi Square Global Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* ========================================================================= */}
        {/* TOP SECTION: 2-COLUMN EDITORIAL LAYOUT (Frame 42.png)                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Column 1 (Left): Logo, Socials, Booking Contact, Customer Support */}
          <div className="flex flex-col space-y-8 md:space-y-10">
            <div>
              <Link
                href="/"
                className="text-3xl sm:text-4xl font-serif tracking-[0.08em] uppercase font-normal text-white hover:text-[#EADBEE] transition-colors"
              >
                LOGO
              </Link>
              <p className="text-base text-[#D5C4DB] font-serif mt-1">
                Socials
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-serif uppercase tracking-[0.14em] text-[#EEDBEE] mb-3">
                FOR BOOKING CONTACT
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-[#D5C4DB] font-sans">
                <p>
                  <a
                    href="tel:1-800-900-1200"
                    className="hover:text-white transition-colors"
                  >
                    1-800-900-1200
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+918197788977"
                    className="hover:text-white transition-colors"
                  >
                    +91 81977 88977 / +91 123 456 7890
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hotelitagisquare01@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    hotelitagisquare01@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-serif uppercase tracking-[0.14em] text-[#EEDBEE] mb-2">
                CUSTOMER SUPPORT
              </h4>
              <p className="text-xs sm:text-sm text-[#D5C4DB] font-sans">
                <a
                  href="mailto:hotelitagisquare01@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  hotelitagisquare01@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 (Right): Newsletter Subscription & Quick Links */}
          <div className="flex flex-col space-y-10 lg:pl-10">
            <div>
              <NewsletterForm />
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-serif uppercase tracking-[0.14em] text-[#EEDBEE] mb-4">
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-xs sm:text-sm text-[#D5C4DB] font-sans">
                <div className="space-y-2.5">
                  <p>
                    <Link href="#rooms" className="hover:text-white transition-colors">
                      Hotel
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
                    <Link href="/book-now" className="hover:text-white transition-colors">
                      Book a Reservation
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CENTER MONUMENTAL WORDMARK FRAMED BY DELICATE HAIRLINES (Frame 42.png)    */}
      {/* ========================================================================= */}
      <div className="w-full border-t border-white/20 my-8 md:my-14" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 text-center py-6 md:py-10">
        <div className="overflow-hidden py-2">
          <h2 data-reveal="self" data-reveal-distance="36" data-reveal-duration="0.65" className="text-6xl sm:text-8xl md:text-[9.5rem] lg:text-[11.5rem] font-uncial tracking-[0.06em] uppercase font-normal text-white select-none leading-none">
            ITAGI
          </h2>
        </div>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-uncial tracking-[0.03em] text-white mt-3 md:mt-6 select-none font-normal">
          hospitality & Retail
        </p>
      </div>

      <div className="w-full border-b border-white/20 mb-8 md:mb-10" />

      {/* ========================================================================= */}
      {/* BOTTOM LEGAL & COPYRIGHT BAR                                              */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#C9BED0] font-serif">
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
      <div className="w-full bg-white py-8 px-4 flex flex-col items-center justify-center border-t border-gray-200 select-none">
        <div className="flex items-center font-material-rounded text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.25em] leading-none">
          <span className="text-[#E51924]">K</span>
          <span className="text-black">INGPI</span>
          <span className="text-[#001AFF]">N</span>
        </div>
        <span className="font-luxurious text-4xl sm:text-5xl md:text-6xl text-black tracking-[0.02em] -mt-2 sm:-mt-3 drop-shadow-[0_2px_8px_rgba(72,20,84,0.45)]">
          Vision Forge
        </span>
      </div>
    </footer>
  );
}
