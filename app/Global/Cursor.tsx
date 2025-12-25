"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page() {
  const cursorRef = useRef<HTMLDivElement>(null);

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

    const hoverElements = document.querySelectorAll('[class*="hover:"]');
    const cursorImage = cursorRef.current?.querySelector("img");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 6,
          width: 20,
          duration: 0.5,
          ease: "power3.out",
        });
        if (cursorImage) {
          if (el.tagName === "A") {
            gsap.to(cursorRef.current, {
              width: 40,
              justifyContent: "end",
              duration: 0.5,
              ease: "power3.out",
            });
            gsap.to(cursorImage, {
              opacity: 1,
              rotate: 360,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        }
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.5,
          width: 20,
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
      });
    });

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="cursor flex justify-center p-1.5 items-center mix-blend-difference fixed w-5 h-5 rounded-full bg-white pointer-events-none z-50"
      >
        <img src="arrow.webp" className="w-2 invert rotate-90 opacity-0" />
      </div>
    </div>
  );
}
