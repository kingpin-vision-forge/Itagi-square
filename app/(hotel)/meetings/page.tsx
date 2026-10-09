import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Banquet Hall | Hotel Itagi Square',
  description:
    'A banquet hall for more than 100 guests at Hotel Itagi Square, suited to meetings, conferences, weddings and celebrations in Vijayapura.',
};

export default function MeetingsPage() {
  return (
    <main className={styles.page}>
      <PageHero
        title="Banquet Hall"
        subtitle="A flexible venue for meetings, conferences and celebrations, with space for more than 100 guests."
        image="/images/hero/entrance-clean.png"
        imageAlt="The warmly lit entrance of Hotel Itagi Square"
      />

      <section className={styles.capacity} aria-labelledby="capacity-title">
        <div className={styles.capacityCopy}>
          <h2 id="capacity-title">Room for<br />100+ guests.</h2>
          <p>
            Bring people together in the Banquet Hall at Hotel Itagi Square. The venue accommodates
            more than 100 guests and can host professional gatherings as comfortably as personal
            celebrations.
          </p>
          <p>
            Seating and service can be planned around the occasion, whether you are arranging a
            focused business meeting, a conference programme or a full family function.
          </p>
        </div>
        <div className={styles.capacityImage}>
          <Image
            src="/images/experiences/connect.png"
            alt="Banquet Hall at Hotel Itagi Square prepared for a gathering"
            fill
            sizes="(max-width: 767px) 100vw, 42vw"
            className={styles.coverImage}
          />
        </div>
      </section>

      <section className={styles.occasions} aria-labelledby="occasions-title">
        <div className={styles.occasionsHeading}>
          <h2 id="occasions-title">Made for the moments that bring people together.</h2>
        </div>
        <ul>
          <li>
            <span>Business meetings</span>
            <p>A polished setting for team discussions, client sessions and company gatherings.</p>
          </li>
          <li>
            <span>Conferences &amp; seminars</span>
            <p>Space for larger professional audiences, presentations and organised programmes.</p>
          </li>
          <li>
            <span>Weddings &amp; receptions</span>
            <p>A welcoming indoor venue for ceremonies, receptions and shared meals.</p>
          </li>
          <li>
            <span>Family celebrations</span>
            <p>Host birthdays, anniversaries and milestone occasions with everyone under one roof.</p>
          </li>
        </ul>
      </section>

      <section className={styles.enquiry} aria-labelledby="enquiry-title">
        <div>
          <h2 id="enquiry-title">Plan your gathering.</h2>
          <p>Tell the hotel team about your date, guest count and occasion.</p>
        </div>
        <div className={styles.actions}>
          <Link href="/#contact">Enquire about the hall</Link>
          <a href="tel:+918197788977">Call +91 81977 88977</a>
        </div>
      </section>
    </main>
  );
}
