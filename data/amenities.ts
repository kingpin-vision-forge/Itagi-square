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
        'Currency exchange',
        'Smoking room',
        'High-speed Wi-Fi',
        'Executive meeting rooms',
        'Doctor on call',
        'Business centre',
      ],
    },
    {
      category: 'DINING',
      items: [
        'Mynt (Multi-cuisine restaurant)',
        'Verre (Global high cuisine)',
        '24-hour in-room dining',
        'Authentic Indo-Arabic specialties',
        'Specialty banquet catering',
      ],
    },
    {
      category: 'FITNESS',
      items: [
        'Fitness centre with modern cardio equipment',
        'Outdoor rooftop swimming pool',
        'Sun deck & relaxation loungers',
      ],
    },
    {
      category: 'ROOMS',
      items: [
        'Interconnected family rooms',
        'Same-day laundry & dry cleaning',
        'Daily housekeeping & evening turndown',
        'Individual climate control',
        'Electronic safe lockers',
      ],
    },
  ] as AmenityGroup[],
};
