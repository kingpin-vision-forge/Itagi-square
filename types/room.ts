export interface RoomData {
  id: string;
  title: string;
  category: 'suite' | 'executive-suite' | 'executive';
  tagline: string;
  description: string;
  image: string;
  area: string; // e.g. "21 sq m"
  bedType: string; // e.g. "King Bed"
  maxGuests: string; // e.g. "Up to 3 guests"
  amenities?: string[];
  ctaText?: string;
  ctaLink?: string;
}
