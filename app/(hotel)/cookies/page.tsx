import type { Metadata } from 'next';
import { LegalDocument, type LegalSection } from '@/components/sections/legal-document';

export const metadata: Metadata = {
  title: 'Cookie Policy | Hotel Itagi Square',
  description: 'How cookies and similar technologies are used on the Hotel Itagi Square website.',
};

const sections: LegalSection[] = [
  {
    id: 'about-cookies',
    title: 'What cookies are',
    content: (
      <p>
        Cookies are small text files that a website may place on your device. They can support
        essential functions, remember preferences, measure site use or help deliver advertising.
        Similar technologies include local storage, pixels and device identifiers.
      </p>
    ),
  },
  {
    id: 'current-use',
    title: 'How this website currently uses cookies',
    content: (
      <>
        <p>
          Hotel Itagi Square does not currently use first-party analytics, advertising or preference
          cookies on this website. The enquiry and newsletter forms also do not store their contents
          in cookies or transmit them to a hotel server.
        </p>
        <p>
          Our hosting or network infrastructure may use technically necessary cookies or similar
          signals for security, traffic routing, load balancing and service integrity. These are used
          to operate and protect the website rather than to build advertising profiles.
        </p>
      </>
    ),
  },
  {
    id: 'categories',
    title: 'Cookie categories',
    content: (
      <table>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Current status</th>
            <th scope="col">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Essential</th>
            <td>May be used</td>
            <td>Security, delivery and reliable operation of the website.</td>
          </tr>
          <tr>
            <th scope="row">Preferences</th>
            <td>Not currently used</td>
            <td>Remembering choices such as language or display settings.</td>
          </tr>
          <tr>
            <th scope="row">Analytics</th>
            <td>Not currently used</td>
            <td>Understanding visits and improving website performance.</td>
          </tr>
          <tr>
            <th scope="row">Advertising</th>
            <td>Not currently used</td>
            <td>Personalising or measuring advertising across websites.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party resources and links',
    content: (
      <>
        <p>
          Some pages request visual font resources from Google and may link to maps, ordering
          platforms or social services. When your browser requests an external resource or you follow
          an external link, that provider may receive standard technical information and may use
          cookies under its own policy.
        </p>
        <p>
          Hotel Itagi Square does not control third-party cookies. Review the relevant provider&apos;s
          privacy and cookie information before using its service.
        </p>
      </>
    ),
  },
  {
    id: 'controls',
    title: 'Managing cookies',
    content: (
      <>
        <p>
          Most browsers let you review, block or delete cookies through their privacy settings. You
          can also configure the browser to alert you before a cookie is stored. Blocking strictly
          necessary cookies may affect the reliability or security of some websites.
        </p>
        <p>
          If we introduce optional analytics, preference or advertising cookies, we will update this
          policy and provide an appropriate notice or choice before using them where required.
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
          We may revise this policy when the website&apos;s technology or legal requirements change. The
          date at the top indicates the latest revision.
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

export default function CookiesPage() {
  return (
    <LegalDocument
      title="Cookie Policy"
      summary="What cookies are, which categories this website currently uses, and the controls available to you."
      lastUpdated="9 October 2026"
      sections={sections}
    />
  );
}
