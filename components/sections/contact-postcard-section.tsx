'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ReservationInquiry, ContactFormState } from '@/types/contact';

export function ContactPostcardSection() {
  const [formData, setFormData] = useState<ReservationInquiry>({
    name: '',
    surname: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    rooms: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [formState, setFormState] = useState<ContactFormState>({
    status: 'idle',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationInquiry, string>>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ReservationInquiry]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof ReservationInquiry, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormState({ status: 'submitting' });

    // Simulate luxury concierge reservation submission
    setTimeout(() => {
      setFormState({
        status: 'success',
        successMessage:
          'Thank you. Your reservation inquiry has been presented to our concierge desk. We shall respond with customized arrangements promptly.',
      });
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      surname: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      rooms: '',
      email: '',
      mobile: '',
      message: '',
    });
    setFormState({ status: 'idle' });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F4F0E8] py-20 md:py-28 px-4 sm:px-8 md:px-14 flex justify-center items-center"
      aria-label="Reservation and Contact Inquiry"
    >
      {/* Outer Postcard Outer Margin Container */}
      <div className="w-full max-w-5xl bg-[#FAF8F5] border border-[#1D161F] p-6 sm:p-10 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
        {formState.status === 'success' ? (
          <div className="py-16 text-center max-w-lg mx-auto flex flex-col items-center">
            <div className="w-16 h-24 relative mb-6 opacity-90">
              <Image
                src="/images/icons/botanical-flower.png"
                alt="Botanical seal"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-widest text-[#481454] mb-4">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-[#4A4036] font-sans leading-relaxed mb-8">
              {formState.successMessage}
            </p>
            <button
              onClick={handleReset}
              className="text-xs uppercase tracking-[0.2em] text-[#481454] font-serif border-b border-[#481454] pb-1 hover:text-[#5B1C69] transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Split Postcard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-8 md:gap-12 items-stretch">
              {/* ============================================================= */}
              {/* LEFT POSTCARD HALF: CONTACT US & MESSAGE                      */}
              {/* ============================================================= */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#481454] uppercase tracking-[0.1em] font-normal mb-8">
                    CONTACT US
                  </h2>

                  <div className="flex flex-col h-[280px] sm:h-[320px] md:h-[360px]">
                    <div className="relative w-full h-full border border-[#481454]/70 p-4 transition-all focus-within:border-[#481454] focus-within:ring-1 focus-within:ring-[#481454]/30">
                      <label
                        htmlFor="message"
                        className="text-xs uppercase font-serif tracking-widest text-[#481454] block mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write your personal preferences, arrival times, or bespoke banquet requests..."
                        className="w-full h-[calc(100%-2rem)] bg-transparent resize-none focus:outline-none text-sm font-sans text-[#1D161F] placeholder:text-[#8F7E71]/60 placeholder:font-serif placeholder:italic leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================= */}
              {/* CENTER POSTCARD SPINE: BOTANICAL ROSEHIP FLOWER ENGRAVING    */}
              {/* ============================================================= */}
              <div className="hidden lg:flex flex-col items-center justify-between py-2 px-2 select-none">
                <div className="w-[1px] h-32 bg-[#481454]/50" />
                <div className="relative w-16 h-28 my-4 shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/icons/botanical-flower.png"
                    alt="Vintage botanical engraving"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[1px] flex-1 min-h-[120px] bg-[#481454]/50" />
              </div>

              {/* Mobile botanical divider */}
              <div className="flex lg:hidden items-center justify-center w-full my-4 gap-4 select-none">
                <div className="flex-1 h-[1px] bg-[#481454]/40" />
                <div className="relative w-10 h-16 shrink-0 opacity-80">
                  <Image
                    src="/images/icons/botanical-flower.png"
                    alt="Vintage botanical engraving"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 h-[1px] bg-[#481454]/40" />
              </div>

              {/* ============================================================= */}
              {/* RIGHT POSTCARD HALF: UNDERLINED GUEST DETAILS & TICKET CTA    */}
              {/* ============================================================= */}
              <div className="flex flex-col justify-between pt-2">
                <div className="space-y-6">
                  {/* Row 1: Name & Surname */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className={cn(
                          'w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif',
                          errors.name && 'border-red-600 placeholder:text-red-500'
                        )}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-600 absolute -bottom-4 left-0">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        placeholder="Surname"
                        className="w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif"
                      />
                    </div>
                  </div>

                  {/* Row 2: Check-In & Check-Out */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="checkIn"
                        id="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        placeholder="Check-In"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.type = 'text';
                        }}
                        className="w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="checkOut"
                        id="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        placeholder="Check-Out"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.type = 'text';
                        }}
                        className="w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif"
                      />
                    </div>
                  </div>

                  {/* Row 3: Guests & Rooms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="guests"
                        id="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        placeholder="Guests"
                        className="w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="rooms"
                        id="rooms"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        placeholder="Rooms"
                        className="w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif"
                      />
                    </div>
                  </div>

                  {/* Row 4: Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className={cn(
                        'w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif',
                        errors.email && 'border-red-600 placeholder:text-red-500'
                      )}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-600 absolute -bottom-4 left-0">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Row 5: Mobile */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile"
                      className={cn(
                        'w-full bg-transparent pb-1.5 pt-1 text-sm font-sans text-[#1D161F] border-b border-[#481454]/50 focus:border-[#481454] focus:outline-none transition-colors placeholder:text-[#481454]/70 placeholder:font-serif',
                        errors.mobile && 'border-red-600 placeholder:text-red-500'
                      )}
                    />
                    {errors.mobile && (
                      <span className="text-[10px] text-red-600 absolute -bottom-4 left-0">
                        {errors.mobile}
                      </span>
                    )}
                  </div>
                </div>

                {/* Scalloped Peach Vintage Ticket Button (Bottom Right) */}
                <div className="mt-10 flex justify-end">
                  <button
                    type="submit"
                    disabled={formState.status === 'submitting'}
                    className="group relative cursor-pointer focus:outline-none transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    aria-label="Send Inquiry"
                  >
                    {/* SVG Scalloped Vintage Ticket with Inward Notches & Fine Border */}
                    <div className="relative drop-shadow-[0_4px_10px_rgba(72,20,84,0.18)] group-hover:drop-shadow-[0_6px_14px_rgba(72,20,84,0.26)] transition-all">
                      <svg
                        width="150"
                        height="48"
                        viewBox="0 0 150 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible"
                      >
                        {/* Vintage Ticket Path with Inverted Semicircular Scallops on Left & Right */}
                        <path
                          d="M 12 1.5
                             H 138
                             A 10 10 0 0 1 148 11.5
                             V 16
                             A 8 8 0 0 0 148 32
                             V 36.5
                             A 10 10 0 0 1 138 46.5
                             H 12
                             A 10 10 0 0 1 2 36.5
                             V 32
                             A 8 8 0 0 0 2 16
                             V 11.5
                             A 10 10 0 0 1 12 1.5
                             Z"
                          fill="#F7E5D4"
                          stroke="#481454"
                          strokeWidth="1.2"
                        />
                      </svg>
                      {/* Ticket Text */}
                      <span className="absolute inset-0 flex items-center justify-center font-serif text-sm tracking-[0.18em] text-[#481454] uppercase font-medium">
                        {formState.status === 'submitting' ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3 h-3 border-2 border-[#481454] border-t-transparent rounded-full animate-spin" />
                            <span>SENDING</span>
                          </span>
                        ) : (
                          <span>SEND ⇒</span>
                        )}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
