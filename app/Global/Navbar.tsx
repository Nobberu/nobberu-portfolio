"use client";

import Image from "next/image";
import { navLink } from "../const";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="absolute top-0 w-screen z-60 flex items-center justify-between p-15 text-3xl">
        <Link href="/" className="brand relative flex items-center">
          <Image src="/logo.webp" alt="Nobberu Logo" width={40} height={40} />
        </Link>

        <ul className="flex flex-row space-x-10 text-xl">
          {navLink.map((link) => (
            <li key={link.label}>
              <Link href={`${link.href}`}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="brand relative flex items-center">
          <h2 className="cursor-pointer">
            <i>co</i>ntact
          </h2>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
