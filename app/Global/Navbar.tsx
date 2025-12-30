"use client";

import { useRef, useState, useEffect } from "react";
import { navLink } from "../const";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Modes from "./toggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isFullMode = pathname.startsWith("/full");
  const basePath = isFullMode ? "/full" : "";

  const compactRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  const modeCont = useRef<HTMLDivElement>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerLine1 = useRef<HTMLSpanElement>(null);
  const hamburgerLine2 = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (isFullMode) {
      gsap.to(fullRef.current, { opacity: 1, duration: 0.5 });
      gsap.to(compactRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(modeCont.current, { y: -16 });
    } else {
      gsap.to(compactRef.current, { opacity: 1, duration: 0.5 });
      gsap.to(fullRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(modeCont.current, { y: 13 });
    }
  }, [isFullMode]);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap
        .timeline()
        .to(mobileMenuRef.current, {
          height: "100vh",
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          ".mobile-link",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
          },
          "-=0.2",
        );

      gsap.to(hamburgerLine1.current, {
        rotate: 45,
        y: 5,
        duration: 0.3,
        background: "var(--color-bg)",
      });
      gsap.to(hamburgerLine2.current, {
        rotate: -45,
        y: -5,
        duration: 0.3,
        background: "var(--color-bg)",
      });
    } else {
      gsap
        .timeline()
        .to(".mobile-link", {
          y: 20,
          opacity: 0,
          duration: 0.3,
        })
        .to(
          mobileMenuRef.current,
          {
            height: 0,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.1",
        );

      gsap.to(hamburgerLine1.current, {
        rotate: 0,
        y: 0,
        duration: 0.3,
        background: "var(--color-text)",
      });
      gsap.to(hamburgerLine2.current, {
        rotate: 0,
        y: 0,
        duration: 0.3,
        background: "var(--color-text)",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <header>
      <nav className="fixed w-screen z-60 flex items-center justify-between px-6 pt-12 md:pt-20 md:px-45 text-lg font-light overflow-x-hidden">
        <Link
          href={pathname.startsWith("/full") ? "/full" : "/"}
          className="brand relative flex items-center space-x-10 font-light transition-all duration-600 hover:font-extrabold z-70"
        >
          <Image
            src="/icon.png"
            alt="Nobberu Logo"
            className="h-3 w-4.5"
            height={12}
            width={18}
            priority
            fetchPriority="high"
          />
          <div className="hidden w-10 md:block"></div>
          <h2 className="absolute left-9 cursor-pointer">nobberu.</h2>
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

        <div className="hidden items-center space-x-4 md:flex">
          <div className="-translate-y-4 text-right" ref={modeCont}>
            <h2 ref={compactRef} className="cursor-pointer">
              Compact Mode
            </h2>
            <h2 ref={fullRef} className="cursor-pointer">
              Full Mode
            </h2>
          </div>
          <Modes />
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden z-70"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            ref={hamburgerLine1}
            className="block h-0.5 w-6 bg-current origin-center transition-colors"
          />
          <span
            ref={hamburgerLine2}
            className="block h-0.5 w-6 bg-current origin-center transition-colors"
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-50 flex h-0 w-full flex-col items-center justify-center overflow-hidden bg-text text-bg md:hidden"
      >
        <div className="flex flex-col items-center gap-8 mb-10">
          {navLink.map((link) => (
            <Link
              key={link.label}
              href={`${basePath}${link.href}`}
              className="mobile-link text-3xl font-light opacity-0 translate-y-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mobile-link flex flex-col items-center gap-4 opacity-0 translate-y-4 mt-5">
          <div className="text-center text-sm">
            {isFullMode ? "Full Mode Active" : "Compact Mode Active"}
          </div>
          <Modes />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
