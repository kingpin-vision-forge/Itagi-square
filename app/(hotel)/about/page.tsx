import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';

export const metadata: Metadata = {
  title: 'About Itagi | Hotel Itagi Square',
  description: 'The story, values, and people behind Hotel Itagi Square.',
};

// Full page content lands in chunk 5.
export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Itagi"
        subtitle="A modern stay rooted in warm, unhurried hospitality."
        image="/images/hero/hotel-exterior.png"
        imageAlt="Hotel Itagi Square entrance framed by palms at dusk"
      />
    </main>
  );
}
