import type { Metadata } from 'next';
import { LegalDocument, type LegalSection } from '@/components/sections/legal-document';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hotel Itagi Square',
  description: 'Terms and conditions governing use of the Hotel Itagi Square website and hotel services.',
};

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    content: (
      <>
        <p>
          These Terms &amp; Conditions govern your use of the Hotel Itagi Square website and any
          enquiry or reservation you make through the contact details published on it. By using this
          website, you agree to these terms. If you do not agree, please stop using the website.
        </p>
        <p>
          “Hotel Itagi Square”, “we”, “us” and “our” refer to Hotel Itagi Square, Itagi Garden,
          Athani Road, Vijayapura 586108, Karnataka, India.
        </p>
      </>
    ),
  },
  {
    id: 'website-use',
    title: 'Using this website',
    content: (
      <>
        <p>You may use this website for lawful, personal purposes, including to:</p>
        <ul>
          <li>learn about the hotel, rooms, dining, amenities and Banquet Hall;</li>
          <li>contact the hotel or enquire about availability; and</li>
          <li>access links to services operated by third parties.</li>
        </ul>
        <p>
          You must not misuse the website, attempt unauthorised access, interfere with its operation,
          introduce malicious code, scrape it in a way that harms the service, or use its content for
          an unlawful or misleading purpose.
        </p>
      </>
    ),
  },
  {
    id: 'reservations',
    title: 'Reservations and enquiries',
    content: (
      <>
        <p>
          A booking is confirmed only when the hotel directly accepts it and communicates the
          applicable room, dates, price, taxes, payment terms and cancellation conditions. Website
          content, an enquiry, or an attempted form submission does not by itself create a confirmed
          reservation.
        </p>
        <p>
          The website&apos;s enquiry and newsletter forms currently do not transmit information to the
          hotel. Please call or email us using the published contact details when you need a response.
          You are responsible for providing complete and accurate information when making a booking.
        </p>
      </>
    ),
  },
  {
    id: 'hotel-services',
    title: 'Hotel services and guest responsibilities',
    content: (
      <>
        <p>
          Check-in, check-out, identification, payment, cancellation, occupancy and property rules
          communicated during booking or at the hotel form part of your stay. Special requests,
          early check-in and late check-out remain subject to availability and may carry an additional
          charge.
        </p>
        <p>
          Guests must comply with applicable law, respect hotel staff, other guests and property, and
          pay valid charges connected with their reservation or stay. The hotel may refuse or end
          service where reasonably necessary for safety, unlawful conduct, non-payment or serious
          breach of hotel rules, subject to applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'accuracy',
    title: 'Prices, availability and website accuracy',
    content: (
      <>
        <p>
          We aim to keep website information accurate, but photographs may be illustrative and
          facilities, menus, availability, opening hours and prices can change. The details confirmed
          directly by the hotel at the time of booking take priority over general website content.
        </p>
        <p>
          We may correct errors, update content, suspend features or change the website without prior
          notice. Nothing on this website is financial, medical or legal advice.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    content: (
      <p>
        The website&apos;s branding, text, photographs, graphics, layout and other original content are
        owned by or licensed to Hotel Itagi Square and are protected by applicable intellectual
        property law. You may view and share links to the website for personal use, but you may not
        copy, republish, sell, modify or commercially exploit its content without written permission.
      </p>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party links and services',
    content: (
      <p>
        Links to maps, delivery platforms, social networks or other third-party services are provided
        for convenience. Those services operate under their own terms and policies. We do not control
        their availability, security, content or handling of personal data.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Disclaimers and liability',
    content: (
      <>
        <p>
          The website is provided on an “as available” basis. To the fullest extent permitted by law,
          we do not guarantee uninterrupted access or that every item of content will always be
          complete, current or error-free.
        </p>
        <p>
          Hotel Itagi Square will not be liable for indirect or consequential loss arising solely from
          use of, or inability to use, this website. Nothing in these terms excludes liability or a
          consumer right that cannot lawfully be excluded or limited.
        </p>
      </>
    ),
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    content: (
      <p>
        These terms are governed by the laws of India. Subject to any mandatory consumer forum or
        other jurisdiction available under applicable law, disputes relating to the website or these
        terms will be subject to the courts having jurisdiction in Vijayapura, Karnataka.
      </p>
    ),
  },
  {
    id: 'changes-contact',
    title: 'Changes and contact',
    content: (
      <>
        <p>
          We may update these terms to reflect changes to the website, hotel services or applicable
          law. The date at the top shows the latest revision. Continued use after an update means the
          revised terms apply from their effective date.
        </p>
        <p>
          Questions may be sent to{' '}
          <a href="mailto:hotelitagisquare01@gmail.com">hotelitagisquare01@gmail.com</a> or raised by
          calling <a href="tel:+918197788977">+91 81977 88977</a>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      summary="The rules for using this website, making enquiries and arranging a stay or event with Hotel Itagi Square."
      lastUpdated="9 October 2026"
      sections={sections}
    />
  );
}
