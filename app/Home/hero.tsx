"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set(".box", {
      opacity: 1,
      delay: 1,
    });
    gsap.to(".box", {
      width: "100%",
      ease: "expo.out",
      duration: 2.15,
      delay: 1.05,
    });
  }, []);
  return (
    <div
      id="hero"
      className="h-screen w-screen flex relative flex-col justify-center items-center p-15"
    >
      <div className="box h-3/4 w-3/5 opacity-0 bg-dark mt-25"></div>
      <div className="h-1/4 w-full flex flex-col justify-end items-center font-bold tracking-[-2%]">
        <div className="w-full flex justify-between items-center text-xl">
          <p>{"<Based in Indonesia />"}</p>
          <p>{"I'm Nobbel"}</p>
          <p>{"// UI/UX Designer & Developer"}</p>
        </div>
        <div className="flex justify-center items-center uppercase text-[111px] leading-0">
          Visual Tinkerer
          <Image
            src="/Star.webp"
            alt="Star"
            width={92}
            height={92}
            className="mx-8.5"
          />
          Engineer
        </div>
      </div>
    </div>
  );
};

export default Hero;
