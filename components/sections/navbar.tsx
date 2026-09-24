'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previousY = window.scrollY;
    let distance = 0;

    const handleScroll = () => {
      // Clamp rubber-band overscroll and accumulate small movements to avoid jitter.
      const currentY = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
      const delta = currentY - previousY;
      previousY = currentY;
      if (currentY <= 96) {
        distance = 0;
        setIsHidden(false);
        return;
      }
      if (Math.sign(delta) !== Math.sign(distance)) distance = 0;
      distance += delta;
      if (Math.abs(distance) >= 8) {
        setIsHidden(distance > 0);
        distance = 0;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep the drawer keyboard accessible and restore the page when it closes.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const menuToggle = menuToggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const controls = drawerRef.current?.querySelectorAll<HTMLElement>('a[href], button');
    controls?.[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
      if (event.key !== 'Tab' || !controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', closeOnDesktop);
      menuToggle?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (onBookNowClick) {
      onBookNowClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 grid h-[72px] grid-cols-[1fr_auto] items-center bg-white/85 px-5 font-serif text-[#1D161F] backdrop-blur-md transition-transform duration-200 ease-out motion-reduce:transition-none md:h-24 md:grid-cols-[1fr_auto_1fr] md:px-8 lg:px-10 focus-within:translate-y-0',
          isHidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0',
          className
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Itagi Square home"
          className="group justify-self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
        >
          <span className="text-[32px] font-normal leading-none tracking-[0.02em] transition-colors group-hover:text-purple-700 md:text-[42px]">
            ITAGI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-10 md:flex lg:gap-16 xl:gap-20"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-xl font-medium leading-none whitespace-nowrap transition-colors hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700 lg:text-[26px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-3 justify-self-end">
          <Button
            variant="hero-pill"
            size="md"
            onClick={handleBookNow}
            className="h-11 border border-white px-5 py-0 text-base font-medium tracking-normal shadow-none transition-colors hover:translate-y-0 hover:shadow-none motion-reduce:transition-none md:h-12 md:w-[160px] md:text-xl lg:w-[198px] lg:text-[22px]"
          >
            BOOK NOW
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            ref={menuToggleRef}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
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
          'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-200 motion-reduce:transition-none',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        id="mobile-navigation"
        ref={drawerRef}
        role="dialog"
        aria-modal={mobileMenuOpen ? true : undefined}
        aria-label="Navigation menu"
        inert={!mobileMenuOpen}
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-sm overflow-y-auto bg-[#F4F0E8] shadow-2xl p-8 flex flex-col justify-between md:hidden transition-transform duration-200 ease-out motion-reduce:transition-none border-l border-[#CFC2AE]',
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
