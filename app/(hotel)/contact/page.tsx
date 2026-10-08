import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';

export const metadata: Metadata = {
  title: 'Contact Us | Hotel Itagi Square',
  description: 'Reach Hotel Itagi Square by phone, email, or our enquiry form.',
};

// Full page content lands in chunk 4.
export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="We're here for every question, before and during your stay."
        image="/images/hero/entrance-clean.png"
        imageAlt="Warmly lit entrance doors of Hotel Itagi Square"
      />
    </main>
  );
}
