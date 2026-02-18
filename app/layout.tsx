import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";

import Cursor from "./global/cursor";
import Navbar from "./global/navbar";
import ReactLenis from "lenis/react";

const mainFont = Manrope({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const subFont = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-sub",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobberu.vercel.app"),
  title: {
    default: "Nobbel - Creative Developer & Interaction Designer",
    template: "%s | Nobbel",
  },
  description:
    "Crafting motion-driven web applications with various modern tools (GSAP, Next.js, Astro). Specialized in high-performance digital experiences.",
  keywords: [
    "Nobbel",
    "Nobberu",
    "Creative Developer",
    "Frontend",
    "Frontend Developer",
    "React",
    "Next",
    "Next.js",
    "GSAP",
  ],
  authors: [{ name: "Nobbel" }],
  creator: "Nobbel",
  verification: {
    google: "rWJtgeDSA6fCfLUSEzF78Ts-Y8fuMobQ7GKpEGcbwcU",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nobbel - Creative Developer & Interaction Designer",
    description: "Bridging the gap between engineering and fluid design.",
    url: "https://nobberu.vercel.app",
    siteName: "Nobbel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobbel - Creative Developer & Interaction Designer",
    description:
      "Crafting motion-driven web applications with Next.js and GSAP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${mainFont.variable} ${subFont.variable} antialiased`}
    >
      <body className="overflow-x-hidden">
        <ReactLenis root>
          <Cursor />
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
