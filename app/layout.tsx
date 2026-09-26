import type { Metadata } from "next";
import { Cormorant_Garamond, Luxurious_Script, Uncial_Antiqua } from "next/font/google";
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
  title: "Hotel Itagi Square | Luxury Stays & Indo-Arabic Fine Dining",
  description:
    "Experience effortless contemporary comfort, world-class suites, authentic Indo-Arabic fine dining, and refined banquets at Hotel Itagi Square.",
  keywords: [
    "Hotel Itagi Square",
    "Luxury Hotel",
    "Suites",
    "Indo-Arabic Restaurant",
    "Fine Dining",
    "Banquets",
    "Hospitality",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
