import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className={cn(
        'relative flex min-h-[480px] h-[100svh] w-full items-center justify-center overflow-hidden',
        className
      )}
    >
      <Image
        src="/images/hero/entrance-clean.png"
        alt="Hotel Itagi Square entrance framed by palms, with warmly lit doors and steps"
        fill
        preload
        quality={92}
        sizes="100vw"
        className="object-cover object-center"
      />

      <h1
        id="hero-title"
        className="relative z-10 flex -translate-y-4 flex-col items-center px-4 text-center font-normal leading-none tracking-normal text-white"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <span className="block text-[clamp(64px,9.722vw,140px)]">HOTEL</span>
        <span className="block whitespace-nowrap text-[clamp(40px,7.222vw,104px)]">
          ITAGI SQUARE
        </span>
      </h1>
    </section>
  );
}
