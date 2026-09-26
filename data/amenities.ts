import { AmenityGroup } from '@/types/guide';

export const amenitiesData = {
  title: 'AMENITIES',
  subtitle:
    'Thoughtfully curated features designed to enhance your stay at Hotel Itagi Square.',
  categories: [
    {
      category: 'HOTEL',
      items: [
        'Car parking',
        'Multi-lingual staff',
        'High-speed Wi-Fi',
        'Executive meeting rooms',
        'Doctor on call',
        'Business centre',
        'Flora terrace'
      ],
    },
    {
      category: 'DINING',
      items: [
        'Al-Quds (Multi-cuisine restaurant)',
        'In-room dining',
        'Authentic Indo-Arabic specialties',
        'Specialty banquet catering',
      ],
    },
    {
      category: 'FITNESS (Coming Soon)',
      items: [
        'Fitness centre with modern cardio equipment',
        'Outdoor rooftop swimming pool',
        'Sun deck & relaxation loungers',
      ],
    },
    {
      category: 'ROOMS',
      items: [
        'Laundry & dry cleaning',
        'Daily housekeeping & evening turndown',
      ],
    },
  ] as AmenityGroup[],
};
