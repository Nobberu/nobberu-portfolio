"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import RollingText, { RollingTextHandle } from "../components/rolling-text";
import { navLink } from "../const";

import Logo from "@/assets/icons/logo.webp";

const NavItem = ({ item }: { item: { href: string; label: string } }) => {
  const itemRef = useRef<RollingTextHandle>(null);

  const hover = () => {
    itemRef.current?.exportHover();
  };

  const exit = () => {
    itemRef.current?.exportExit();
  };

  return (
    <li className="list my-10 -translate-y-10 opacity-0">
      <Link href={item.href} onMouseEnter={hover} onMouseLeave={exit}>
        <RollingText
          ref={itemRef}
          text={item.label}
          size="60px"
          customClass="font-bold"
        />
      </Link>
    </li>
  );
};

const Navbar = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100svh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [isOpen]);

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".brand", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 8.5,
      });
      gsap.to([".line-1", ".line-2"], {
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 8.5,
      });
    },
    { scope: containerRef },
  );

  const toggleMenu = contextSafe(() => {
    if (isOpen) {
      gsap.to(".ham", { gap: "8px", duration: 0.3 });

      gsap.to(".line-1", { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(".line-2", { rotate: 0, y: 0, width: "66%", duration: 0.3 }); // Reset width to 2/3

      gsap.to(".menu", {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.to(".list", {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(".ham", { gap: 0, duration: 0.3 });

      gsap.to(".line-1", {
        rotate: 45,
        y: 1.5,
        duration: 0.3,
      });

      gsap.to(".line-2", {
        rotate: -45,
        y: -1.5,
        width: "100%",
        duration: 0.3,
      });

      gsap.to(".menu", {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.to(".list", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.75,
        ease: "power3.out",
      });
    }

    setIsOpen(!isOpen);
  });

  return (
    <header>
      <nav
        ref={containerRef}
        className="absolute w-screen z-1 flex items-center justify-between px-5 py-10 md:p-15 text-3xl"
      >
        <Link href="/" className="relative flex items-center overflow-hidden">
          <Image
            src={Logo}
            alt="Nobberu Logo"
            width={40}
            height={40}
            className="brand -translate-y-full size-8 md:size-10"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="ham size-10 relative z-50 flex flex-col items-end justify-center text-light text-sm gap-2 overflow-hidden"
        >
          <div className="line line-1 w-full h-0.75 translate-x-full bg-dark rounded-full origin-center" />
          <div className="line line-2 w-2/3 h-0.75 translate-x-full bg-dark rounded-full origin-center" />
        </button>

        <div className="menu absolute left-0 top-0 w-full h-screen flex flex-col justify-center items-center bg-light -translate-y-full z-40">
          <ul className="flex flex-col items-center">
            {navLink.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
