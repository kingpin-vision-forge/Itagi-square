'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'ROOMS & SUITES', href: '#rooms' },
  { label: 'DINING', href: '#dining' },
  { label: 'MORE', href: '#guide' },
];

export interface NavbarProps {
  className?: string;
  onBookNowClick?: () => void;
}

export function Navbar({ className, onBookNowClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (onBookNowClick) {
      onBookNowClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between',
          isScrolled
            ? 'bg-white/80 dark:bg-[#1A0322]/85 backdrop-blur-md shadow-sm border-b border-[#CFC2AE]/30'
            : 'bg-white/35 backdrop-blur-sm border-b border-white/20',
          className
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-2 focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-[0.25em] text-[#1D161F] group-hover:text-[#481454] transition-colors uppercase">
            ITAGI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8 lg:space-x-12"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs lg:text-[13px] tracking-[0.18em] font-medium text-[#1D161F]/90 hover:text-[#481454] uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#481454] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center space-x-3">
          <Button
            variant="hero-pill"
            size="md"
            onClick={handleBookNow}
            className="hidden sm:inline-flex px-6 py-2 tracking-wider"
          >
            BOOK NOW
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#1D161F] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#481454]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Drawer Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-sm bg-[#F4F0E8] shadow-2xl p-8 flex flex-col justify-between md:hidden transition-transform duration-300 ease-out border-l border-[#CFC2AE]',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#CFC2AE]/60">
            <span className="text-xl font-serif font-bold tracking-[0.2em] text-[#1D161F]">
              HOTEL ITAGI
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full text-[#1D161F] hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-[0.15em] text-[#1D161F] hover:text-[#481454] transition-colors py-2 border-b border-[#CFC2AE]/30"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#CFC2AE]/60">
          <a
            href="tel:+918323500700"
            className="flex items-center space-x-3 text-xs tracking-wider text-[#5C5260]"
          >
            <Phone className="w-4 h-4 text-[#481454]" />
            <span>+91 8323500700</span>
          </a>
          <Button
            variant="hero-pill"
            size="lg"
            onClick={handleBookNow}
            className="w-full justify-center tracking-widest text-xs"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </>
  );
}
