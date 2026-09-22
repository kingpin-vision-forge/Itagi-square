import React from 'react';
import { beforeYouArriveData } from '@/data/policies';
import { amenitiesData } from '@/data/amenities';
import { PolicyColumn } from '@/components/molecules/policy-column';
import { AmenityColumn } from '@/components/molecules/amenity-column';

export function GuestGuideSection() {
  return (
    <section
      id="guide"
      className="w-full bg-[#F4F0E8] py-20 md:py-28 px-6 sm:px-10 md:px-16 transition-colors"
      aria-label="Guest Information and Amenities Guide"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* PART 1: BEFORE YOU ARRIVE.                                               */}
        {/* ========================================================================= */}
        <div className="mb-20 md:mb-28">
          <header className="mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[0.02em] text-[#1D161F] uppercase">
              {beforeYouArriveData.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#6B5F54] font-sans">
              {beforeYouArriveData.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {beforeYouArriveData.columns.map((col) => (
              <PolicyColumn key={col.id} column={col} />
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: AMENITIES                                                         */}
        {/* ========================================================================= */}
        <div>
          <header className="mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[0.02em] text-[#1D161F] uppercase">
              {amenitiesData.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#6B5F54] font-sans">
              {amenitiesData.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {amenitiesData.categories.map((group) => (
              <AmenityColumn key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
