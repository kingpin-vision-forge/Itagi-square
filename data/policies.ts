import { PolicyGroup } from '@/types/guide';

export const beforeYouArriveData = {
  title: 'BEFORE YOU ARRIVE.',
  subtitle: 'Everything worth knowing before your stay.',
  columns: [
    {
      id: 'policy-rundown',
      title: 'POLICY RUNDOWN',
      items: [
        { label: 'Check-in', value: '2:00 PM' },
        { label: 'Check-out', value: '12:00 PM' },
        { label: 'Check-in essentials', value: 'Photo ID and Credit Card' },
        {
          label: 'Cards Accepted',
          value: 'Master Card, Visa',
        },
        {
          label: 'Special Requests',
          value:
            'Early check-in and late check-out as per availability and subject to added fees',
        },
      ],
    },
    {
      id: 'contact-info',
      title: 'CONTACT INFORMATION',
      items: [
        { label: 'Property', value: 'Hotel Itagi Square' },
        {
          label: 'Address',
          value:
            'Itagi garden, Athani Rd, near Itagi petrol pump, Vijayapura 586108, Karnataka, India',
        },
        { label: 'Phone', value: '+91 81977 88977' },
        { label: 'Reservations', value: 'hotelitagisquare01@gmail.com' },
      ],
    },
    {
      id: 'proximity',
      title: 'IN CLOSE PROXIMITY TO',
      items: [
        { value: 'Ibrahim Roza' },
        { value: 'Gol Gumbaz' },
        { value: 'Bara Kaman' },
        { value: 'Savitri Temple' },
        { value: 'Jami Masjid' },
        { value: 'Saraswati Temple' },
        { value: 'Al-Ameen Hospital' },
      ],
    },
    {
      id: 'hotel-essentials',
      title: 'HOTEL ESSENTIALS',
      items: [
        { label: 'Classification', value: 'Boutique Luxury Hotel & Suites' },
        { label: 'GSTIN', value: '30AAOFK7973L2ZP' },
        { label: 'Fact Sheet', value: 'Available upon request at front desk' },
        { label: 'Concierge', value: '24/7 dedicated travel & dining assistance' },
      ],
    },
  ] as PolicyGroup[],
};
