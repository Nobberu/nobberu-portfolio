"use client";

import { useRef } from "react";
import { navLink } from "../const";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Modes from "./toggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const pathname = usePathname();

  const isFullMode = pathname.startsWith("/Full");
  const basePath = isFullMode ? "/Full" : "";

  const compactRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  const modeCont = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isFullMode) {
      gsap.to(fullRef.current, {
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(compactRef.current, {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(modeCont.current, {
        y: -16,
      });
    } else if (isFullMode == false) {
      gsap.to(compactRef.current, {
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(fullRef.current, {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(modeCont.current, {
        y: 13,
      });
    }
  }, [isFullMode]);

  return (
    <header>
      <nav className="flex fixed left-0 right-0 items-center justify-between pt-20 px-45 text-lg font-light z-49">
        <Link
          href={pathname.startsWith("/Full") ? "/Full" : "/"}
          className="brand flex space-x-10 items-center relative font-light hover:font-extrabold transition-all duration-600"
        >
          <Image
            src="/icon.png"
            alt="Nobberu Logo"
            className="w-4.5 h-3"
            height={12}
            width={18}
            priority
            fetchPriority="high"
          />
          <div className="w-10"></div>
          <h2 className="absolute left-9 cursor-pointer">nobberu.</h2>
        </Link>

        <ul className="flex row space-x-10">
          {navLink.map((link) => (
            <li key={link.label}>
              <Link href={`${basePath}${link.href}`} className="hover:">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
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
      </nav>
    </header>
  );
};

export default Navbar;
