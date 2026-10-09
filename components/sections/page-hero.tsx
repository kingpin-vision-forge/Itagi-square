import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  className?: string;
  imageClassName?: string;
  /** Optional CTAs rendered under the subtitle. */
  children?: React.ReactNode;
}

/** Inner-page hero: shorter than the home hero, title anchored bottom-left. */
export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  className,
  imageClassName,
  children,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className={cn('relative flex h-[62svh] min-h-[420px] w-full items-end overflow-hidden', className)}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        quality={90}
        sizes="100vw"
        className={cn('object-cover object-center', imageClassName)}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/65 via-black/30 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[75rem] px-5 pb-12 text-white md:px-10 md:pb-20">
        <h1
          id="page-hero-title"
          className="font-serif text-[40px] font-normal uppercase leading-[1.05] tracking-[0.12em] sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-white/90 md:text-2xl">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
