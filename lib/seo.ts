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

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}
