"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".hero-char", {
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.05,
        delay: 7.3,
      });

      gsap.to(".star", {
        y: 0,
        autoAlpha: 1,
        rotate: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: 8.1,
      });

      gsap.to(".intro-text p", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 8.8,
      });

      gsap.to(".star p", {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: "power3.out",
        delay: 9.1,
      });
    },
    { scope: container },
  );

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="hero-char inline-block translate-y-full will-change-transform"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      ref={container}
      className="h-dvh w-screen flex relative flex-col justify-center items-center p-5 md:p-15"
    >
      <div className="h-fit w-full flex flex-col justify-center items-center font-bold tracking-[-2%]">
        <div className="intro-text w-full flex justify-between items-center text-[10.5px] md:text-2xl overflow-hidden leading-normal">
          <p className="translate-y-full">{"<Based in Indonesia />"}</p>
          <p className="translate-y-full">{"I'm Nobbel"}</p>
          <p className="translate-y-full">{"// UI/UX Designer & Developer"}</p>
        </div>

        <div className="hero w-full flex flex-col md:flex-row justify-between items-start md:items-center uppercase">
          <h1 className="overflow-hidden leading-none">
            {splitText("Visual Tinkerer")}
          </h1>

          <div className="md:hidden w-full flex mt-2 md:mt-0">
            <div className="star invisible opacity-0 translate-y-12.5 relative flex flex-col text-xs md:text-lg justify-center items-center lowercase rotate-60 mr-3 md:mr-0">
              <Image
                src="/star.webp"
                alt="star"
                width={92}
                height={92}
                className="size-9 md:size-23"
              />
              <p className="absolute -bottom-3.5 md:-bottom-6.5 translate-y-2.5 opacity-0">
                and
              </p>
            </div>

            <h1 className="overflow-hidden leading-none">
              {splitText("Engineer")}
            </h1>
          </div>

          <div className="hidden star invisible opacity-0 translate-y-12.5 relative md:flex flex-col text-xs md:text-lg justify-center items-center lowercase rotate-60 mr-3 md:mr-0">
            <Image
              src="/star.webp"
              alt="star"
              width={92}
              height={92}
              className="size-9 md:size-23"
            />
            <p className="absolute -bottom-3.5 md:-bottom-6.5 translate-y-2.5 opacity-0">
              and
            </p>
          </div>

          <h1 className="invisible md:visible overflow-hidden leading-none">
            {splitText("Engineer")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
