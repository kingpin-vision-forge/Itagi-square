import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F4F0E8] text-[#1D161F]">
        {children}
      </body>
    </html>
  );
}
