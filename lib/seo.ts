const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "https://hotelitagisquare.com";

export const siteUrl = configuredSiteUrl.startsWith("http")
  ? configuredSiteUrl.replace(/\/$/, "")
  : `https://${configuredSiteUrl.replace(/\/$/, "")}`;

export const hotelAddress = {
  "@type": "PostalAddress",
  streetAddress: "Itagi Garden, Athani Road, near Itagi Petrol Pump",
  addressLocality: "Vijayapura",
  addressRegion: "Karnataka",
  postalCode: "586108",
  addressCountry: "IN",
} as const;

// Pin from the hotel's Google Business Profile.
export const hotelGeo = {
  "@type": "GeoCoordinates",
  latitude: 16.8290514,
  longitude: 75.686058,
} as const;

export const hotelMapUrl = "https://www.google.com/maps?cid=370817116227217672";

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}
