import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        absoluteUrl('/images/home-image.jpeg'),
        absoluteUrl('/images/rooms/room-2.jpeg'),
        absoluteUrl('/images/room-4.jpeg'),
        absoluteUrl('/images/rooms/room-3.jpeg'),
      ],
    },
    {
      url: absoluteUrl('/alquds'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        absoluteUrl('/images/alquds/feast.webp'),
        absoluteUrl('/images/alquds/2.jpeg'),
        absoluteUrl('/images/alquds/11.jpeg'),
      ],
    },
    {
      url: absoluteUrl('/book-now'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/meetings'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [absoluteUrl('/images/experiences/connect.png')],
    },
    {
      url: absoluteUrl('/about'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
