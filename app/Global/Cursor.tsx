"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll('[class*="hover:"]');
    const cursorImage = cursorRef.current?.querySelector("img");

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;

      gsap.to(cursorRef.current, {
        scale: 6,
        width: 20,
        duration: 0.5,
        left: 0,
        ease: "power3.out",
      });

      if (cursorImage && el.tagName === "A") {
        gsap.to(cursorRef.current, {
          width: 40,
          justifyContent: "end",
          duration: 0.5,
          left: 50,
          ease: "power3.out",
        });
        gsap.to(cursorImage, {
          opacity: 1,
          rotate: 360,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    const onLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.5,
        width: 20,
        left: 0,
        ease: "power3.out",
      });

      if (cursorImage) {
        gsap.to(cursorImage, {
          opacity: 0,
          rotate: 90,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  return (
    <div
      ref={cursorRef}
      className="cursor flex justify-center p-1.5 items-center mix-blend-difference fixed w-5 h-5 rounded-full bg-white pointer-events-none z-50 top-0 left-0"
    >
      <Image
        src="/arrow.webp"
        alt="Cursor Arrow"
        width={8}
        height={8}
        className="w-2 invert rotate-90 opacity-0"
        priority
        fetchPriority="high"
      />
    </div>
  );
}
