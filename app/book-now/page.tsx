import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import { bookingContacts } from '@/data/booking';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Book Now | Hotel Itagi Square',
  description: 'Call Hotel Itagi Square to book your stay.',
};

export default function BookNowPage() {
  return (
    <main className={styles.page}>
      <Link href="/" className={styles.back}>
        <ArrowLeft aria-hidden="true" />
        Back to Itagi
      </Link>

      <div className={styles.content}>
        <h1 className={styles.heading}>Book your stay.</h1>
        <ul className={styles.numbers} aria-label="Call to book">
          {bookingContacts.map((contact) => (
            <li key={contact.href}>
              <a href={contact.href} className={styles.number} aria-label={`Call ${contact.number} to book`}>
                <Phone className={styles.phone} aria-hidden="true" />
                <span>{contact.number}</span>
                <ArrowUpRight className={styles.arrow} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
