"use client";

import { useRef } from "react";
import { navLink } from "../const";
import Link from "next/link";
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
        duration: 0.4,
      });
      gsap.to(compactRef.current, {
        opacity: 0,
        duration: 0.4,
      });
      gsap.to(modeCont.current, {
        y: -16,
      });
    } else if (isFullMode == false) {
      gsap.to(compactRef.current, {
        opacity: 1,
        duration: 0.4,
      });
      gsap.to(fullRef.current, {
        opacity: 0,
        duration: 0.4,
      });
      gsap.to(modeCont.current, {
        y: 13,
      });
    }
  }, [isFullMode]);

  return (
    <header>
      <nav className="flex fixed left-0 right-0 items-center justify-between py-20 px-60 text-lg font-light">
        <div className="flex space-x-10 relative">
          <h2 className="text-transparent">nobberu.</h2>
          <h2 className="absolute font-light hover:font-extrabold transition-all duration-300">
            nobberu.
          </h2>
        </div>

        <ul className="flex row space-x-10">
          {navLink.map((link) => (
            <li key={link.label}>
              <Link href={`${basePath}${link.href}`}>{link.label}</Link>
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
