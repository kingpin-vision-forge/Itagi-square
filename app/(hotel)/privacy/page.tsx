import type { Metadata } from 'next';
import { LegalDocument, type LegalSection } from '@/components/sections/legal-document';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hotel Itagi Square',
  description: 'How Hotel Itagi Square handles personal data provided through enquiries, bookings and website use.',
};

const sections: LegalSection[] = [
  {
    id: 'scope',
    title: 'Scope of this policy',
    content: (
      <>
        <p>
          This Privacy Policy explains how Hotel Itagi Square handles personal data connected with
          this website, direct enquiries, reservations and stays. It applies when you contact us by
          phone or email, make a booking, visit the hotel, or otherwise ask us to provide a service.
        </p>
        <p>
          Hotel Itagi Square determines why and how personal data is used for these activities. Our
          address is Itagi Garden, Athani Road, Vijayapura 586108, Karnataka, India.
        </p>
      </>
    ),
  },
  {
    id: 'data-collected',
    title: 'Personal data we may collect',
    content: (
      <>
        <p>Depending on how you interact with us, this may include:</p>
        <ul>
          <li>your name, email address, mobile number and other contact details;</li>
          <li>arrival and departure dates, room count, guest count and booking preferences;</li>
          <li>messages, requests, feedback and other correspondence;</li>
          <li>booking, payment and stay information needed to provide hotel services; and</li>
          <li>
            standard technical information received by our hosting infrastructure, such as IP
            address, browser or device type, requested pages, time and referral information.
          </li>
        </ul>
        <p>
          Please do not send sensitive personal information through ordinary email unless it is
          necessary and we have asked you to provide it through an appropriate channel.
        </p>
      </>
    ),
  },
  {
    id: 'website-forms',
    title: 'Current website forms',
    content: (
      <>
        <p>
          The enquiry and newsletter forms currently shown on this website work only in your browser.
          They do not transmit their contents to Hotel Itagi Square or store those entries on a hotel
          server. A success or validation message shown by either form is not confirmation that we
          received your information.
        </p>
        <p>
          To make an enquiry or reservation, contact us by phone or email. If online submission is
          enabled later, we will update this policy and provide the appropriate notice at the point of
          collection.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use personal data',
    content: (
      <>
        <p>We use personal data only for relevant and lawful purposes, which may include:</p>
        <ul>
          <li>responding to enquiries and taking steps requested before a booking;</li>
          <li>confirming, managing and delivering accommodation, dining or event services;</li>
          <li>processing payments, maintaining business records and preventing misuse or fraud;</li>
          <li>meeting safety, tax, accounting and other legal obligations;</li>
          <li>resolving complaints and protecting our guests, staff, property and legal rights; and</li>
          <li>sending promotional updates only where you have chosen to receive them.</li>
        </ul>
        <p>
          Depending on the activity, processing may be based on your consent, information you
          voluntarily provide for a requested purpose, steps necessary to provide a service, or a
          requirement or permission under applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'When information may be shared',
    content: (
      <>
        <p>We may share only what is reasonably necessary with:</p>
        <ul>
          <li>service providers supporting hosting, communications, reservations or payments;</li>
          <li>professional advisers such as accountants, auditors or legal advisers;</li>
          <li>government, regulatory, law-enforcement or judicial authorities when required; and</li>
          <li>a successor or purchaser in connection with a genuine business reorganisation.</li>
        </ul>
        <p>
          We do not sell personal data. Third parties processing information for us should use it only
          for the agreed service and apply appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    id: 'retention-security',
    title: 'Retention and security',
    content: (
      <>
        <p>
          We retain personal data only for as long as it is reasonably needed for the purpose for
          which it was collected, to maintain necessary booking and financial records, resolve
          disputes, or comply with law. Retention periods can vary by record type.
        </p>
        <p>
          We use reasonable organisational and technical safeguards appropriate to the information we
          handle. No internet transmission or storage system can be guaranteed completely secure, so
          please use care when sending information electronically.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your privacy choices and rights',
    content: (
      <>
        <p>Subject to applicable law, you may ask us to:</p>
        <ul>
          <li>provide information about personal data being processed and with whom it was shared;</li>
          <li>correct, complete or update inaccurate or incomplete personal data;</li>
          <li>erase personal data that is no longer required to be retained;</li>
          <li>withdraw consent for future processing where consent is the basis; or</li>
          <li>address a grievance about how your personal data has been handled.</li>
        </ul>
        <p>
          Send a request to{' '}
          <a href="mailto:hotelitagisquare01@gmail.com">hotelitagisquare01@gmail.com</a> with the
          subject “Privacy Request”. We may need to verify your identity and may retain information
          where the law requires or permits it. You may also have the right to nominate another person
          to exercise applicable rights in the event of death or incapacity.
        </p>
      </>
    ),
  },
  {
    id: 'children-third-parties',
    title: 'Children and third-party services',
    content: (
      <>
        <p>
          This website is intended for adults arranging hotel, dining or event services. A parent or
          lawful guardian should make reservations and provide any necessary information concerning a
          child. We do not knowingly use this website to request personal data directly from children.
        </p>
        <p>
          Links to maps, delivery platforms and other external websites are governed by their own
          privacy practices. Review their policies before providing personal data to them.
        </p>
      </>
    ),
  },
  {
    id: 'updates-contact',
    title: 'Updates and contact',
    content: (
      <>
        <p>
          We may update this policy when our website, services or legal obligations change. The latest
          revision date appears at the top of this page.
        </p>
        <p>
          For privacy questions or grievances, email{' '}
          <a href="mailto:hotelitagisquare01@gmail.com">hotelitagisquare01@gmail.com</a>, call{' '}
          <a href="tel:+918197788977">+91 81977 88977</a>, or write to Hotel Itagi Square, Itagi
          Garden, Athani Road, Vijayapura 586108, Karnataka, India.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      summary="How Hotel Itagi Square handles information connected with enquiries, reservations, stays and use of this website."
      lastUpdated="9 October 2026"
      sections={sections}
    />
  );
}
