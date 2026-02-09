"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const cursorImage = imageRef.current;
      if (!cursor || !cursorImage) return;

      gsap.set(cursor, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        const isInteractive = target.closest('button, [class*="hover:"]');

        if (isInteractive) {
          // ON ENTER
          gsap.to(cursor, {
            scale: 4,
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(cursorImage, {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          });
        } else {
          // ON LEAVE
          gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(cursorImage, {
            opacity: 0,
            rotate: 90,
            scale: 0.5,
            duration: 0.3,
            ease: "power3.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="md:flex hidden justify-center mix-blend-difference items-center fixed w-4 h-4 bg-light border-text pointer-events-none z-61 top-0 left-0"
    >
      <Image
        ref={imageRef}
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
