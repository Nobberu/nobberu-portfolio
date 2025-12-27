import "./globals.css";
import type { Metadata } from "next";
import { Zalando_Sans_SemiExpanded } from "next/font/google";
import Navbar from "./Global/Navbar";
import Cursor from "./Global/Cursor";

const zalandoSans = Zalando_Sans_SemiExpanded({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-zalando",
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
    <html lang="en" className={`${zalandoSans.variable} antialiased`}>
      <body>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
