export interface PolicyItem {
  label?: string;
  value: string;
}

export interface PolicyGroup {
  id: string;
  title: string;
  items: PolicyItem[];
}

export interface ProximityLandmark {
  name: string;
  distance?: string;
  category?: string;
}

export type AmenityCategory = 'HOTEL' | 'DINING' | 'FITNESS' | 'ROOMS';

export interface AmenityGroup {
  category: AmenityCategory;
  items: string[];
}
