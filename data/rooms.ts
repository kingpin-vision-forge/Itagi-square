import { RoomData } from '@/types/room';

export const roomsData: RoomData[] = [
  {
    id: 'suite-room',
    title: 'SUITE ROOM',
    category: 'suite',
    tagline: 'Elevated luxury with separate living spaces',
    description:
      'Settle into a spacious room with a separate living area, designed for a more comfortable and elevated stay.',
    image: '/images/rooms/suite-room.png',
    area: '21 sq m',
    bedType: 'King Bed',
    maxGuests: 'Up to 3 guests',
    amenities: [
      'Separate Living Area',
      'High-Speed Wi-Fi',
      '24-Hour Room Service',
      'Tea & Coffee Maker',
      'Smart Television',
    ],
    ctaText: 'EXPLORE ITAGI',
    ctaLink: '#contact',
  },
  {
    id: 'executive-suite',
    title: 'EXECUTIVE SUITE',
    category: 'executive-suite',
    tagline: 'Dedicated living area with contemporary elegance',
    description:
      'A more spacious stay with a dedicated living area and room to unwind in comfort.',
    image: '/images/rooms/executive-suite.png',
    area: '21 sq m',
    bedType: 'King Bed',
    maxGuests: 'Up to 3 guests',
    amenities: [
      'Dedicated Living Room',
      'City View Windows',
      'Executive Work Desk',
      'Complimentary Breakfast',
      'Premium Toiletries',
    ],
    ctaText: 'EXPLORE ITAGI',
    ctaLink: '#contact',
  },
  {
    id: 'executive-room',
    title: 'EXECUTIVE ROOM',
    category: 'executive',
    tagline: 'Thoughtfully curated spaces for relaxed comfort',
    description:
      'A comfortable stay designed with thoughtful spaces and everything you need for a relaxed visit.',
    image: '/images/rooms/executive-room.png',
    area: '21 sq m',
    bedType: 'King Bed',
    maxGuests: 'Up to 3 guests',
    amenities: [
      'King-Size Plush Bed',
      'High-Speed Wi-Fi',
      'Air Conditioning',
      'Rainfall Shower',
      'Digital Safe',
    ],
    ctaText: 'EXPLORE ITAGI',
    ctaLink: '#contact',
  },
];
