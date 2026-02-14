"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/icons/logo.webp";

const Navbar = () => {
  useGSAP(() => {
    gsap.to(".brand", {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 8.5,
    });
  }, []);
  return (
    <header>
      <nav className="absolute w-screen z-1 flex items-center justify-between px-5 py-10 md:p-15 text-3xl">
        <Link href="/" className="relative flex items-center overflow-hidden">
          <Image
            src={Logo}
            alt="Nobberu Logo"
            width={40}
            height={40}
            className="brand -translate-y-full size-8 md:size-10"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
