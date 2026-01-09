import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "./Global/Navbar";
import Cursor from "./Global/Cursor";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-manrope",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "nobbel.",
  description:
    "This is the portfolio page of Nobbel Kaisar Bhumi (also known as nobberu) as a digital creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="overflow-x-hidden">
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
