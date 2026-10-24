export type ExperiencePillarId = 'unwind' | 'dine' | 'explore' | 'connect';

export interface ExperiencePillar {
  id: ExperiencePillarId;
  title: 'UNWIND' | 'DINE' | 'EXPLORE' | 'CONNECT' | string;
  subtitle?: string;
  image: string;
  /** The image is a mockup with a label and button baked in below the photo. */
  bakedLabel?: boolean;
  alt: string;
  href: string;
  description?: string;
}
