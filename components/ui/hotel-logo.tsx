import Image from 'next/image';
import { cn } from '@/lib/utils';

const HOTEL_LOGO_SRC = '/images/hotel-itagi-square-logo.png';

interface HotelLogoProps {
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function HotelLogo({
  alt = 'Hotel Itagi Square',
  className,
  priority = false,
  sizes,
}: HotelLogoProps) {
  return (
    <Image
      src={HOTEL_LOGO_SRC}
      alt={alt}
      width={4096}
      height={1150}
      priority={priority}
      sizes={sizes}
      className={cn('h-auto w-full object-contain', className)}
    />
  );
}
