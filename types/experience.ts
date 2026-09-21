export type ExperiencePillarId = 'unwind' | 'dine' | 'explore' | 'connect';

export interface ExperiencePillar {
  id: ExperiencePillarId;
  title: 'UNWIND' | 'DINE' | 'EXPLORE' | 'CONNECT' | string;
  subtitle?: string;
  image: string;
  alt: string;
  href: string;
  description?: string;
}
