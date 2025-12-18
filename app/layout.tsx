import type { Metadata } from "next";
import { Zalando_Sans_SemiExpanded } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";

const Zalando = Zalando_Sans_SemiExpanded({
  variable: "--font-zalando-sans-semiexp",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${Zalando.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
