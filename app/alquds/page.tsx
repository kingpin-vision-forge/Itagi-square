import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { RestaurantMenu } from "@/components/alquds/restaurant-menu";
import { AlQudsScrollMotion } from "@/components/alquds/alquds-scroll-motion";
import { AlQudsHeader } from "@/components/alquds/alquds-header";
import { AlQudsLoader } from "@/components/alquds/alquds-loader";
import { AlQudsGallery } from "@/components/alquds/alquds-gallery";
import { AgencyCredit } from "@/components/sections/agency-credit";
import { orderPlatforms } from "@/data/alquds";
import { absoluteUrl, hotelAddress, siteUrl } from "@/lib/seo";
import styles from "./page.module.css";

const title = "Al-Quds Restaurant | Indo-Arabic Food in Vijayapura";
const description =
  "Visit Al-Quds at Hotel Itagi Square for Indo-Arabic food in Vijayapura (Bijapur), from fragrant rice to charcoal-grilled favourites made for sharing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/alquds",
  },
  openGraph: {
    title,
    description,
    url: "/alquds",
    siteName: "Hotel Itagi Square",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/alquds/feast.webp",
        width: 1536,
        height: 1024,
        alt: "Indo-Arabic dishes served at Al-Quds in Hotel Itagi Square",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/alquds/feast.webp"],
  },
};

const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/alquds#restaurant`,
      name: "Al-Quds",
      url: absoluteUrl("/alquds"),
      description,
      image: [
        absoluteUrl("/images/alquds/feast.webp"),
        absoluteUrl("/images/alquds/2.jpeg"),
        absoluteUrl("/images/alquds/11.jpeg"),
      ],
      telephone: "+91 81977 88977",
      servesCuisine: ["Indo-Arabic", "Indian", "Arabic"],
      address: hotelAddress,
      parentOrganization: {
        "@type": "Hotel",
        "@id": `${siteUrl}/#hotel`,
        name: "Hotel Itagi Square",
        url: siteUrl,
      },
      sameAs: orderPlatforms
        .map((platform) => platform.url)
        .filter((url): url is string => Boolean(url)),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hotel Itagi Square",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Al-Quds Restaurant",
          item: absoluteUrl("/alquds"),
        },
      ],
    },
  ],
};

export default function AlQudsPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <AlQudsLoader />
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <AlQudsHeader />
      <AlQudsScrollMotion>
        <section
          className={styles.hero}
          aria-labelledby="hero-title"
          data-scroll-hero
        >
          <Image
            src="/images/alquds/feast.webp"
            alt="Illustrative Indo-Arabic spread with biryani, charcoal-grilled skewers and fresh herbs"
            fill
            preload
            sizes="100vw"
            className={styles.heroImage}
            data-scroll-hero-media
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent} data-scroll-hero-content>
            <h1 id="hero-title">
              Good food.
              <br />
              Even better company.
            </h1>
            <p>Indo-Arabic flavours, shared at Hotel Itagi Square.</p>
            <a href="#cuisine" className={styles.lightButton}>
              Explore the cuisine <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <div className={styles.story} data-scroll-cascade>
            <p className={styles.eyebrow} data-scroll-track>
              Al-Quds at Itagi Square
            </p>
            <h2 id="about-title" data-scroll-heading>
              A meeting of flavours.
              <br />A place to gather.
            </h2>
            <p data-scroll-lines>
              Welcome to Al-Quds, our Indo-Arabic kitchen in Vijayapura. A place
              for fragrant rice, charcoal-grilled favourites, and a table worth
              lingering over.
            </p>
            <p data-scroll-lines>
              Join us for a meal with family, catch up with friends, or make a
              little more of your stay at Itagi Square.
            </p>
            <a href="#visit" className={styles.textLink}>
              Find your way here <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.ovalPhoto} data-scroll-oval>
            <Image
              src="/images/alquds/2.jpeg"
              alt="Carved Arabic arch doorway with twisted gold columns beneath a crystal chandelier at Al-Quds"
              fill
              sizes="(max-width: 767px) 85vw, 42vw"
              data-scroll-parallax
            />
          </div>
        </section>
        <AlQudsGallery />
        <section
          id="cuisine"
          className={styles.cuisine}
          aria-labelledby="cuisine-title"
        >
          <h2 id="cuisine-title" data-scroll-heading>
            A little spice.
            <br className={styles.mobileBreak} /> A lot to love.
          </h2>
          <p className={styles.sectionIntro} data-scroll-lines>
            Explore a few favourites from our kitchen.
          </p>
          <RestaurantMenu />
          <p className={styles.menuNote} data-scroll-lines>
            A selection from our kitchen. For the full menu, today’s
            availability, and dietary requests,{" "}
            <a href="tel:+918197788977">call our team</a>.
          </p>
        </section>
        <section
          id="order"
          className={styles.order}
          aria-labelledby="order-title"
        >
          <div className={styles.orderImage} data-scroll-clip="frame">
            <Image
              src="/images/alquds/11.jpeg"
              alt="Overhead view of a shared table with starters, noodles, soup, dessert and a pomegranate cooler"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
              data-scroll-media
            />
          </div>
          <div className={styles.orderCopy} data-scroll-cascade>
            <h2 id="order-title" data-scroll-heading>
              Your favourites.
              <br />
              Your table.
            </h2>
            <p data-scroll-lines>A taste of Al-Quds, wherever you settle in.</p>
            <div className={styles.platforms}>
              {orderPlatforms.map((platform) =>
                platform.url ? (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.platformLink}
                  >
                    <Image src={platform.logo} alt="" width={44} height={44} />
                    <span>Order on {platform.name}</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ) : (
                  <div key={platform.name} className={styles.pendingPlatform}>
                    <span>{platform.name}</span>
                    <span>Coming soon</span>
                  </div>
                ),
              )}
            </div>
            {!orderPlatforms.some((platform) => platform.url) && (
              <p className={styles.orderNote}>
                Online ordering links will be available here soon.{" "}
                <a href="tel:+918197788977">Call for dining enquiries.</a>
              </p>
            )}
          </div>
        </section>
        <section className={styles.invitation} aria-label="Dining at Al-Quds">
          <div className={styles.invitationMedia} data-scroll-clip="wipe">
            <Image
              src="/images/alquds/6.jpeg"
              alt="The Al-Quds dining hall under a glowing gold star ceiling and crystal chandelier"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              data-scroll-media
            />
          </div>
          <div className={styles.invitationContent} data-scroll-cascade>
            <p data-scroll-heading>
              Come hungry.
              <br />
              Stay a little longer.
            </p>
            <hr />
            <span data-scroll-lines>
              There’s always a reason to gather around good food.
            </span>
            <a href="#visit" className={styles.lightButton}>
              Plan your visit <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="visit"
          className={styles.visit}
          aria-labelledby="visit-title"
        >
          <div className={styles.visitCopy} data-scroll-cascade>
            <h2 id="visit-title" data-scroll-heading>
              We’ll meet you
              <br />
              at Itagi Square.
            </h2>
            <div className={styles.details}>
              <details open>
                <summary>
                  Find us <Plus size={18} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    Hotel Itagi Square
                    <br />
                    Itagi Garden, Athani Road,
                    <br />
                    near Itagi petrol pump,
                    <br />
                    Vijayapura, Karnataka 586108
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hotel+Itagi+Square+Vijayapura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    Get directions <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </details>
              <details>
                <summary>
                  Plan your visit <Plus size={18} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    Contact the hotel team for current dining hours, table
                    availability, and group enquiries.
                  </p>
                  <a href="tel:+918197788977" className={styles.textLink}>
                    +91 81977 88977{" "}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </details>
              <details>
                <summary>
                  Make yourself at home <Plus size={18} aria-hidden="true" />
                </summary>
                <div>
                  <p>
                    Make a meal part of a longer stay at Hotel Itagi Square.
                  </p>
                  <Link href="/" className={styles.textLink}>
                    Explore the hotel{" "}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </details>
            </div>
          </div>
          <div className={styles.visitImage} data-scroll-clip="frame">
            <Image
              src="/images/alquds/4.jpeg"
              alt="The Al-Quds entrance at Hotel Itagi Square, with its lit sign above the steps"
              fill
              sizes="(max-width: 767px) 100vw, 44vw"
              data-scroll-media
            />
          </div>
        </section>
        <section className={styles.contact} aria-labelledby="contact-title">
          <div data-scroll-cascade>
            <h2 id="contact-title" data-scroll-heading>
              A table for your next get-together.
            </h2>
            <p data-scroll-lines>
              For dining enquiries and group visits, speak with our team.
            </p>
            <a href="tel:+918197788977" className={styles.lightButton}>
              Call Al-Quds <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </AlQudsScrollMotion>
      <footer className={styles.footer}>
        <a
          href="#"
          className={styles.footerBrand}
          aria-label="Al-Quds, back to top"
        >
          <Image
            src="/images/alquds/alquds-logo-light.png"
            alt=""
            width={1581}
            height={1913}
            sizes="140px"
          />
        </a>
        <div>
          <p>At Hotel Itagi Square, Vijayapura</p>
          <a href="tel:+918197788977">+91 81977 88977</a>
        </div>
        <Link href="/" className={styles.textLink}>
          Back to Itagi Square <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </footer>
      <AgencyCredit />
    </div>
  );
}
