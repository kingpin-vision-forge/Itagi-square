'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <span className="text-xs sm:text-sm text-[#D5C4DB] font-serif mb-2 tracking-wide">
        Subscribe for latest updates
      </span>
      {status === 'success' ? (
        <div className="py-2.5 px-4 bg-white/10 rounded-full border border-white/20 text-xs text-[#EEDBEE] flex items-center gap-2">
          <span>✓</span>
          <span>Thank you for subscribing to our private gazette.</span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white/10 border border-white/20 rounded-full p-1 max-w-md backdrop-blur-sm focus-within:border-white/50 transition-colors"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your email address..."
            className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder:text-[#A390AB] focus:outline-none font-sans"
            aria-label="Email address for updates"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#D5C4DB] hover:bg-white text-[#2B0736] font-medium text-xs uppercase tracking-wider px-5 py-2 rounded-full cursor-pointer transition-all duration-200 shrink-0 font-sans hover:shadow-sm"
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <span className="text-[11px] text-red-300 mt-1.5 ml-3 font-sans">
          Please provide a valid email address.
        </span>
      )}
    </div>
  );
}
