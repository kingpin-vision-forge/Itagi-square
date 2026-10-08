import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';

export const metadata: Metadata = {
  title: 'Meetings & Conferences | Hotel Itagi Square',
  description: 'Banquet halls and meeting spaces for corporate events, weddings, and celebrations.',
};

// Full page content lands in chunk 6.
export default function MeetingsPage() {
  return (
    <main>
      <PageHero
        title="Meetings & Conferences"
        subtitle="Spaces for boardrooms, banquets, and every celebration in between."
        image="/images/experiences/connect.png"
        imageAlt="Banquet hall set for an event at Hotel Itagi Square"
      />
    </main>
  );
}
