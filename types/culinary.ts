export interface CulinaryItem {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  tag?: string;
}

export interface DiningSectionData {
  title: string;
  subtitle: string;
  ribbonImage: string;
  items: CulinaryItem[];
  ctaLabel: string;
  ctaHref: string;
}
