import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Lenis from "./Global/Lenis";
import Cursor from "./Global/Cursor";
import Navbar from "./Global/Navbar";

<meta
  name="google-site-verification"
  content="rWJtgeDSA6fCfLUSEzF78Ts-Y8fuMobQ7GKpEGcbwcU"
/>;

const mainFont = Manrope({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobberu.vercel.app"),
  title: {
    default: "Nobbel | Creative Developer",
    template: "%s | Nobbel",
  },
  description:
    "Crafting motion-driven web applications with various modern tools (GSAP, Next.js, Astro). Specialized in high-performance digital experiences.",
  keywords: [
    "Nobbel",
    "Nobberu",
    "Creative Developer",
    "Frontend Engineer",
    "Next.js",
    "GSAP",
  ],
  authors: [{ name: "Nobbel" }],
  creator: "Nobbel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nobbel | Creative Developer",
    description: "Bridging the gap between engineering and fluid design.",
    url: "https://nobberu.vercel.app",
    siteName: "Nobbel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobbel | Creative Developer",
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
    <html lang="en" className={`${mainFont.variable} antialiased`}>
      <body className="overflow-x-hidden">
        <Lenis />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
