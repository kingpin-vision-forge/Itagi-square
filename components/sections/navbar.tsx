'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { HotelLogo } from '@/components/ui/hotel-logo';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'ROOMS & SUITES', href: '/#rooms' },
  { label: 'DINING', href: '/alquds' },
];

export const moreItems: NavItem[] = [
  { label: 'About Itagi', href: '/about' },
  { label: 'Banquet Hall', href: '/meetings' },
  { label: 'Order Online', href: '/alquds#order' },
];

export interface NavbarProps {
  className?: string;
  onBookNowClick?: () => void;
}

export function Navbar({ className, onBookNowClick }: NavbarProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const moreToggleRef = useRef<HTMLButtonElement>(null);
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

      setIsScrolled(currentY > 20);

      if (currentY <= 96) {
        distance = 0;
        setIsHidden(false);
        return;
      }
      if (Math.sign(delta) !== Math.sign(distance)) distance = 0;
      distance += delta;
      if (Math.abs(distance) >= 8) {
        setIsHidden(distance > 0);
        if (distance > 0) setMoreOpen(false);
        distance = 0;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // MORE disclosure: close on Escape (returning focus) or on a click outside it.
  useEffect(() => {
    if (!moreOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMoreOpen(false);
      moreToggleRef.current?.focus();
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false);
    };
    const handleFocusOut = (event: FocusEvent) => {
      if (!moreRef.current?.contains(event.relatedTarget as Node | null)) setMoreOpen(false);
    };
    const more = moreRef.current;
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    more?.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      more?.removeEventListener('focusout', handleFocusOut);
    };
  }, [moreOpen]);

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

  const handleBookNow = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (onBookNowClick) {
      event.preventDefault();
      onBookNowClick();
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 grid h-[72px] grid-cols-[1fr_auto] items-center px-5 font-serif text-[#1D161F] transition-all duration-300 ease-out motion-reduce:transition-none md:h-20 md:grid-cols-[1fr_auto_1fr] md:px-8 lg:px-10 focus-within:translate-y-0',
          isScrolled
            ? 'bg-white/65 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_32px_0_rgba(32,10,38,0.06)]'
            : 'bg-white/40 backdrop-blur-md border-b border-white/30 shadow-none',
          isHidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0',
          className
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Itagi Square home"
          className="group w-[132px] justify-self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700 md:w-[172px] lg:w-[190px]"
        >
          <HotelLogo alt="" priority sizes="(min-width: 1024px) 190px, (min-width: 768px) 172px, 132px" />
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

          <div ref={moreRef} className="relative">
            <button
              type="button"
              ref={moreToggleRef}
              aria-expanded={moreOpen}
              aria-controls="more-navigation"
              onClick={() => setMoreOpen((open) => !open)}
              className="inline-flex items-center gap-1.5 py-2 text-xl font-medium leading-none whitespace-nowrap transition-colors hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700 lg:text-[26px]"
            >
              MORE
              <ChevronDown
                aria-hidden="true"
                className={cn('h-5 w-5 transition-transform duration-200 motion-reduce:transition-none', moreOpen && 'rotate-180')}
              />
            </button>

            <ul
              id="more-navigation"
              hidden={!moreOpen}
              className="absolute left-1/2 top-[calc(100%+14px)] w-64 -translate-x-1/2 rounded-xl border border-white/40 bg-[#F4F0E8]/90 backdrop-blur-xl py-2 shadow-[0_12px_32px_-8px_rgba(32,10,38,0.18)]"
            >
              {moreItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-5 py-3 text-lg leading-tight transition-colors hover:bg-white/40 hover:text-purple-700 focus-visible:bg-white/40 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Action Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-3 justify-self-end">
          <Link
            href="/book-now"
            onClick={handleBookNow}
            className="inline-flex items-center justify-center rounded-full bg-[#ADCDEE]/90 hover:bg-[#96BFEC] backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700 h-11 border border-white/60 px-5 py-0 text-base font-medium tracking-normal transition-colors motion-reduce:transition-none md:h-12 md:w-[160px] md:text-xl lg:w-[198px] lg:text-[22px] shadow-sm hover:shadow"
          >
            BOOK NOW
          </Link>

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
          'fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-sm overflow-y-auto bg-[#F4F0E8]/95 backdrop-blur-2xl shadow-2xl p-8 flex flex-col justify-between md:hidden transition-transform duration-200 ease-out motion-reduce:transition-none border-l border-[#CFC2AE]/60',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#CFC2AE]/60">
            <Link
              href="/"
              aria-label="Itagi Square home"
              onClick={() => setMobileMenuOpen(false)}
              className="w-40 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
            >
              <HotelLogo alt="" sizes="160px" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full text-[#1D161F] hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav aria-label="Mobile Navigation" className="mt-8 flex flex-col space-y-6">
            {[...navItems, ...moreItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-[0.15em] text-[#1D161F] hover:text-[#481454] transition-colors py-2 border-b border-[#CFC2AE]/30"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#CFC2AE]/60">
          <a
            href="tel:+918197788977"
            className="flex items-center space-x-3 text-xs tracking-wider text-[#5C5260]"
          >
            <Phone className="w-4 h-4 text-[#481454]" />
            <span>+91 81977 88977</span>
          </a>
          <Link
            href="/book-now"
            onClick={handleBookNow}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ADCDEE] px-8 py-3.5 text-[#1D161F] hover:bg-[#96BFEC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700 tracking-widest text-xs"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </>
  );
}
