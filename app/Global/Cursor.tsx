"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.3,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorImage = cursor?.querySelector("img");

    if (!cursor || !cursorImage) return;

    const targets = document.querySelectorAll('[class*="hover:"]');

    const onEnter = () => {
      gsap.to(cursor, {
        scale: 4,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(cursorImage, {
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(cursorImage, {
        opacity: 0,
        rotate: 90,
        scale: 0.5,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  return (
    <div
      ref={cursorRef}
      className="md:flex hidden justify-center items-center mix-blend-difference fixed w-5 h-5 bg-white rounded-full pointer-events-none z-90 top-0 left-0"
    >
      <Image
        src="/arrow.webp"
        alt="Cursor Arrow"
        width={8}
        height={8}
        className="w-2 opacity-0 invert"
        priority
      />
    </div>
  );
}
