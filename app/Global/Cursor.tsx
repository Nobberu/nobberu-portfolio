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
    const Hoverable = document.querySelectorAll('[class*="hover:"]');
    const cursorImage = cursorRef.current?.querySelector("img");

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;

      const NavbarLink = el.closest("nav");
      const Brand = el.closest("nav") && el.classList.contains("brand");

      // Generic hover
      gsap.to(cursorRef.current, {
        scale: 5,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        left: 0,
        top: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      //   Brand vertical cursor style
      if (cursorImage && Brand) {
        gsap.to(cursorRef.current, {
          height: 30,
          width: 30,
          alignItems: "end",
          justifyContent: "center",
          duration: 0.5,
          borderRadius: 0,
          top: 43,
          ease: "power3.out",
        });
        gsap.to(cursorImage, {
          opacity: 1,
          rotate: 360,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      //   Vertical cursor style 
      else if (cursorImage && NavbarLink) {
        gsap.to(cursorRef.current, {
          height: 30,
          alignItems: "end",
          justifyContent: "center",
          duration: 0.5,
          borderRadius: 0,
          top: 43,
          ease: "power3.out",
        });
        gsap.to(cursorImage, {
          opacity: 1,
          rotate: 360,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      //   Horizontal cursor style
      else if (cursorImage && el.tagName === "A") {
        gsap.to(cursorRef.current, {
          width: 40,
          alignItems: "center",
          justifyContent: "end",
          duration: 0.5,
          borderRadius: 0,
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

    // Base cursor style
    const onLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: 50,
        left: 0,
        top: 0,
        duration: 0.5,
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

    Hoverable.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      Hoverable.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  return (
    <div
      ref={cursorRef}
      className="cursor md:flex hidden justify-center p-1.5 items-center mix-blend-difference fixed w-5 h-5 bg-white pointer-events-none z-50 top-0 left-0"
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
