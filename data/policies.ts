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
          value: 'American Express, Diner’s Club, Master Card, Visa',
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
            'Near Audi showroom, Dr. Jack de Sequeira Road, Caranzalem, Panaji, Goa, 403002, India',
        },
        { label: 'Phone', value: '+91 8323500700' },
        { label: 'Reservations', value: 'reservations@itagisquare.com' },
      ],
    },
    {
      id: 'proximity',
      title: 'IN CLOSE PROXIMITY TO',
      items: [
        { value: 'Miramar Beach' },
        { value: 'Fontainhas (Latin Quarter)' },
        { value: 'Adil Shah Palace' },
        { value: 'Historic Churches & Temples' },
        { value: 'Mandovi River Promenade' },
        { value: 'Premier Casinos' },
        { value: 'Kala Academy Cultural Centre' },
        { value: 'Baga & Calangute Beaches' },
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
