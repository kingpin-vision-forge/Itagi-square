import type { Metadata } from "next";
import { Cormorant_Garamond, Luxurious_Script, Uncial_Antiqua } from "next/font/google";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const uncial = Uncial_Antiqua({
  variable: "--font-uncial",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const luxuriousScript = Luxurious_Script({
  variable: "--font-luxurious",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Hotel Itagi Square",
  title: "Hotel Itagi Square | Hotel & Restaurant in Vijayapura",
  description:
    "Hotel Itagi Square is a boutique hotel in Vijayapura with modern rooms, Al-Quds Indo-Arabic restaurant, a banquet hall and 24/7 concierge service.",
  keywords: [
    "Hotel Itagi Square",
    "hotel in Vijayapura",
    "hotel in Bijapur",
    "restaurant in Vijayapura",
    "restaurant in Bijapur",
    "luxury hotel Vijayapura",
    "rooms in Vijayapura",
    "Al-Quds restaurant",
    "Indo-Arabic restaurant Vijayapura",
    "banquet hall Vijayapura",
  ],
  authors: [{ name: "Hotel Itagi Square" }],
  creator: "Hotel Itagi Square",
  publisher: "Hotel Itagi Square",
  category: "Travel and hospitality",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Vijayapura",
  },
  icons: {
    icon: {
      url: "/images/hotel-itagi-square-logo.png",
      type: "image/png",
    },
    shortcut: "/images/hotel-itagi-square-logo.png",
    apple: "/images/hotel-itagi-square-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${uncial.variable} ${luxuriousScript.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400..700,0,0&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F4F0E8] text-[#1D161F]">
        {children}
      </body>
    </html>
  );
}
