"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

const Loading = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const wholeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const stopSignal = useRef(false);

  const STEP_SIZE = 125;

  const icons = [
    { src: "/arrow.webp", alt: "arrow" },
    { src: "/w-star.webp", alt: "star" },
    { src: "/w-logo.webp", alt: "logo" },
  ];

  const REPEATED_ICONS = [...icons, ...icons, ...icons, ...icons];
  const ONE_SET_WIDTH = icons.length * STEP_SIZE;
  const CENTER_STAR_INDEX = 4;

  useGSAP(
    () => {
      if (!containerRef.current || !windowRef.current) return;

      const startX = -ONE_SET_WIDTH;
      const childNodes = containerRef.current.children;
      const starElement = childNodes[CENTER_STAR_INDEX];

      gsap.set(containerRef.current, { x: startX });

      gsap.set(childNodes, { scale: 0.6 });

      gsap.set(starElement, { scale: 1 });

      timelineRef.current = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut", duration: 0.6 },
        onRepeat: () => {
          if (stopSignal.current && timelineRef.current) {
            timelineRef.current.pause();

            gsap.set(windowRef.current, { overflow: "visible", delay: 0.86 });

            const siblings = Array.from(childNodes).filter(
              (_, i) => i !== CENTER_STAR_INDEX,
            );
            gsap.to(siblings, { opacity: 0, duration: 0.1, delay: 0.75 });

            gsap.to(starElement, {
              scale: 255,
              duration: 1.5,
              delay: 0.75,
              ease: "power3.inOut",
            });

            if (logoRef.current) {
              gsap.to(logoRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.75,
              });
            }

            if (wholeRef.current) {
              gsap.to(wholeRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 2,
              });
              gsap.to(wholeRef.current, {
                display: "none",
                delay: 2.5,
              });
            }

            if (textRef.current) {
              gsap.to(textRef.current, { opacity: 0, duration: 0.5 });
            }
          }
        },
      });

      icons.forEach((_, index) => {
        const nextX = startX - STEP_SIZE * (index + 1);

        const currentCenterIdx = CENTER_STAR_INDEX + index;
        const nextCenterIdx = CENTER_STAR_INDEX + index + 1;

        const currentEl = childNodes[currentCenterIdx];
        const nextEl = childNodes[nextCenterIdx];

        timelineRef.current?.to(containerRef.current, {
          x: nextX,
          delay: 1,
        });

        timelineRef.current?.to(
          currentEl,
          {
            scale: 0.6,
          },
          "<",
        );
        timelineRef.current?.to(
          nextEl,
          {
            scale: 1,
          },
          "<",
        );
      });

      timelineRef.current?.set(containerRef.current, { x: startX });

      timelineRef.current?.set(childNodes, { scale: 0.6 });
      timelineRef.current?.set(childNodes[CENTER_STAR_INDEX], { scale: 1 });

      const counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: 100,
        duration: 4,
        ease: "power1.inOut",
        onUpdate: () => {
          if (textRef.current) {
            textRef.current.textContent = `${Math.round(counterObj.value)}%`;
          }
        },
        onComplete: () => {
          stopSignal.current = true;
          if (textRef.current) textRef.current.textContent = "100%";
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={wholeRef}
      className="h-dvh w-screen flex flex-col absolute justify-center items-center overflow-hidden bg-dark -z-1"
    >
      <div className="absolute flex justify-center items-center pointer-events-none">
        <Image
          src="/w-logo.webp"
          alt="logobase"
          width={90}
          height={90}
          ref={logoRef}
          className="size-14 md:size-22.5"
        />
      </div>

      <div
        ref={windowRef}
        className="relative flex justify-start overflow-hidden"
        style={{ width: `${STEP_SIZE * 3}px` }}
      >
        <div
          ref={containerRef}
          className="flex items-center mix-blend-difference will-change-transform"
        >
          {REPEATED_ICONS.map((icon, index) => (
            <div
              key={index}
              className="shrink-0 flex justify-center items-center mix-blend-difference"
              style={{ width: `${STEP_SIZE}px` }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={200}
                height={200}
                className="size-7.gi5 md:size-11.25"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={textRef}
        className="absolute bottom-20 text-sm md:text-xl font-semibold text-light"
      >
        0%
      </div>
    </div>
  );
};

export default Loading;
