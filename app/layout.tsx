import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Lenis from "./Global/Lenis";
import Cursor from "./Global/Cursor";
import Navbar from "./Global/Navbar";

const mainFont = Manrope({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nobbel.",
  description: "Portfolio of Nobbel Kaisar Bhumi.",
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
