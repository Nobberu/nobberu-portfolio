"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface WorksProps {
  number: number;
  src: StaticImageData;
  text: string;
  title: string;
  description: string;
  customClass?: string;
  parallaxSpeed?: number;
  scrollSpeed?: number;
  hoveredId: number | null;
  setHovered: (id: number | null) => void;
}

const Works = ({
  number,
  src,
  text,
  title,
  description,
  customClass = "",
  parallaxSpeed = 0.05,
  scrollSpeed = 30,
  hoveredId,
  setHovered,
}: WorksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef({ x: 0, y: 0 });
  const revealTl = useRef<gsap.core.Timeline | null>(null);

  const isBlurred = hoveredId !== null && hoveredId !== number;
  const isHovered = hoveredId === number;

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        yPercent: scrollSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
        },
      });

      const split = new SplitText(".desc-text", { type: "lines" });

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "block";

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      revealTl.current = gsap.timeline({ paused: true });

      revealTl.current.fromTo(
        split.lines,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.35,
          stagger: 0.1,
          ease: "power3.out",
        },
      );

      return () => {
        split.revert();
      };
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (revealTl.current) {
        if (isHovered) {
          revealTl.current.play();
        } else {
          revealTl.current.reverse();
        }
      }

      const xTo = gsap.quickTo(containerRef.current, "x", {
        duration: 0.5,
        ease: "power3",
      });
      const yTo = gsap.quickTo(containerRef.current, "y", {
        duration: 0.5,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        let x = (clientX - innerWidth / 2) * parallaxSpeed;
        let y = (clientY - innerHeight / 2) * parallaxSpeed;

        if (isHovered) {
          const magnetX = clientX - boundsRef.current.x;
          const magnetY = clientY - boundsRef.current.y;
          x += magnetX * 0.2;
          y += magnetY * 0.2;
        }
        xTo(x);
        yTo(y);
      };

      window.addEventListener("mousemove", handleMouseMove);

      gsap.to(containerRef.current, {
        duration: 0.5,
        scale: isBlurred ? 0.95 : 1,
        opacity: isBlurred ? 0.4 : 1,
        filter: isBlurred
          ? "blur(8px) grayscale(50%)"
          : "blur(0px) grayscale(0%)",
        ease: "power2.out",
        overwrite: "auto",
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    {
      scope: containerRef,
      dependencies: [isHovered, isBlurred, parallaxSpeed],
    },
  );

  return (
    <div
      ref={containerRef}
      className={`absolute flex flex-col group ${customClass}`}
    >
      <Image
        onMouseEnter={() => {
          setHovered(number);
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            boundsRef.current = {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            };
          }
        }}
        onMouseLeave={() => setHovered(null)}
        src={src}
        alt={text}
        className="object-cover w-150 h-90"
      />

      <h3 className="desc-text mt-4 text-3xl">
        {text} <span className="text-lg">&nbsp;( {number} )</span>
      </h3>

      <div className="mt-5 pointer-events-none w-120">
        <h4 className="desc-text text-xl mb-1.5 font-bold">
          <span className="text-sm mr-1.5 text-monza-600">As a</span>
          {title}
        </h4>
        <p className="desc-text text-base font-medium">{description}</p>
      </div>
    </div>
  );
};

Works.displayName = "Works";

export default Works;
