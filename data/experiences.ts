import { ExperiencePillar } from '@/types/experience';

export const experiencesSection = {
  title: 'MORE THAN A STAY.',
  subtitle:
    'Thoughtful spaces and memorable moments, designed to make your time at Itagi feel effortless.',
  pillars: [
    {
      id: 'unwind',
      title: 'UNWIND',
      subtitle: 'Tranquil Living',
      image: '/images/experiences/unwind.png',
      alt: 'Unwind in serene luxury suites at Hotel Itagi Square',
      href: '#rooms',
      description:
        'Settle into curated spaces designed for unhurried comfort, soothing ambient light, and pure relaxation.',
    },
    {
      id: 'dine',
      title: 'DINE',
      subtitle: 'Indo-Arabic Flavours',
      image: '/images/experiences/dine.png',
      alt: 'Gourmet dining and authentic cuisine at Hotel Itagi Square',
      href: '#dining',
      description:
        'Savour high-cuisine Indo-Arabic culinary artistry crafted by master chefs with time-honoured spices.',
    },
    {
      id: 'explore',
      title: 'EXPLORE',
      subtitle: 'Heritage & Grandeur',
      image: '/images/experiences/explore.png',
      alt: 'Architectural grandeur and local attractions at Hotel Itagi Square',
      href: '#contact',
      description:
        'Discover regal archways, intricate stone motifs, and historic landmarks situated right at your doorstep.',
    },
    {
      id: 'connect',
      title: 'CONNECT',
      subtitle: 'Banquets & Meetings',
      image: '/images/experiences/connect.png',
      alt: 'Meeting rooms and banqueting halls at Hotel Itagi Square',
      href: '#contact',
      description:
        'Host distinguished corporate gatherings, private celebrations, and grand banquets with impeccable service.',
    },
  ] as ExperiencePillar[],
};
