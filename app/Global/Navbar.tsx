"use client";

import { navLink } from "../const";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isFullMode = pathname.startsWith("/full");
  const basePath = isFullMode ? "/full" : "";

  return (
    <header>
      <nav className="fixed w-screen z-60 flex items-center justify-between px-6 pt-12 md:pt-20 md:px-45 text-lg font-light overflow-x-hidden">
        <Link
          href="/"
          className="brand relative flex items-center space-x-10 font-light transition-all duration-600 hover:font-extrabold z-70"
        >
          <h2 className="left-9 cursor-pointer">nobberu.</h2>
        </Link>

        <ul className="hidden flex-row space-x-10 md:flex">
          {navLink.map((link) => (
            <li key={link.label}>
              <Link href={`${basePath}${link.href}`} className="hover:">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
