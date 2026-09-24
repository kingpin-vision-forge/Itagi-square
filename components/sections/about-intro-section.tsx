import { AboutPhotoStrips } from './about-photo-strips';
import { cn } from '@/lib/utils';
import styles from './about-intro-section.module.css';

export interface AboutIntroSectionProps {
  className?: string;
}

export function AboutIntroSection({ className }: AboutIntroSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={cn(styles.section, className)}
    >
      <h2 id="about-title" className={styles.statement}>
        <span>Itagi Square is a luxury boutique hotel</span>{' '}
        <span>in the outskirts of Vijayapura, created</span>{' '}
        <span>to offer a truly unique experience.</span>
      </h2>

      <div className={styles.experience}>
        <p className={styles.eyebrow}>The Itagi Experience</p>
        <h3 className={styles.heading}>
          A place to stay. A
          <br /> moment to remember.
        </h3>
        <p className={styles.description}>
          Settle into thoughtful comfort at Hotel Itagi Square, where contemporary hospitality
          meets the character of Goa. From relaxed spaces to warm, attentive service, every detail
          is designed to make your stay feel effortless.
        </p>
      </div>

      <AboutPhotoStrips />
    </section>
  );
}
