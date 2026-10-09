import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Rustumali A. Itagi | About Hotel Itagi Square',
  description:
    'Meet Rustumali A. Itagi, project management consultant and entrepreneur with businesses spanning hospitality, fuel retail, development, farming and food in Vijayapura.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PageHero
        title="Rustumali A. Itagi"
        subtitle="Project management consultant, entrepreneur and the name behind a diverse group of businesses in Vijayapura."
        image="/images/hero/hotel-exterior.png"
        imageAlt="Hotel Itagi Square entrance framed by palms at dusk"
        className="md:bg-[#6d7583]"
        imageClassName="md:object-contain"
      />

      <section className={styles.profile} aria-labelledby="profile-title">
        <div className={styles.profileHeading}>
          <h2 id="profile-title">Built with purpose.<br />Led with experience.</h2>
        </div>
        <div className={styles.profileCopy}>
          <p>
            With a background in civil engineering, business administration and project management,
            Rustumali A. Itagi brings a builder&apos;s discipline to every venture he leads.
          </p>
          <p>
            His work spans fuel retail, hospitality, property development, construction, farming and
            food. Hotel Itagi Square is one expression of that journey: a contemporary destination
            shaped around comfortable stays, memorable dining and well-hosted gatherings in Vijayapura.
          </p>
        </div>
        <dl className={styles.credentials} aria-label="Professional background">
          <div>
            <dt>Qualifications</dt>
            <dd>B.E. (Civil), M.B.A., C.Eng. (I)</dd>
          </div>
          <div>
            <dt>Profession</dt>
            <dd>Project Management Consultant</dd>
          </div>
          <div>
            <dt>Business base</dt>
            <dd>Vijayapura, Karnataka</dd>
          </div>
        </dl>
      </section>

      <section className={styles.place} aria-labelledby="place-title">
        <div className={styles.placeImage}>
          <Image
            src="/images/hero/entrance-clean.png"
            alt="The warmly lit entrance of Hotel Itagi Square"
            fill
            sizes="(max-width: 767px) 100vw, 56vw"
            className={styles.coverImage}
          />
        </div>
        <div className={styles.placeCopy}>
          <h2 id="place-title">Rooted in Vijayapura.</h2>
          <p>
            The Itagi name connects practical enterprise with personal hospitality. At Hotel Itagi
            Square, that means a stay where rooms, dining and events come together in one welcoming
            address on Athani Road.
          </p>
        </div>
      </section>

      <section className={styles.ventures} aria-labelledby="ventures-title">
        <div className={styles.venturesIntro}>
          <h2 id="ventures-title">The Itagi businesses.</h2>
          <p>A diverse group of ventures built around service, development and everyday life.</p>
        </div>
        <div className={styles.ventureList}>
          <article>
            <h3>Itagi Petroleum</h3>
            <p>Dealer of Indian Oil Corporation Ltd.</p>
          </article>
          <article>
            <h3>Hotel Itagi Square</h3>
            <p>Hospitality in Vijayapura, including Hotel Casablanca Multi Cuisine Restaurant.</p>
          </article>
          <article>
            <h3>Itagi Enclave</h3>
            <p>A project of Itagi Construction &amp; Investments on Athani Road.</p>
          </article>
          <article>
            <h3>Itagi Farms &amp; Foods</h3>
            <p>A farming and food venture at Ratnapur Cross, Tikota, Vijayapura.</p>
          </article>
        </div>
      </section>

      <section className={styles.nextStep} aria-labelledby="next-step-title">
        <h2 id="next-step-title">Experience his vision at Hotel Itagi Square.</h2>
        <div className={styles.actions}>
          <Link href="/book-now">Book your stay</Link>
          <Link href="/meetings">Explore the Banquet Hall</Link>
        </div>
      </section>
    </main>
  );
}
