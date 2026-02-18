"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

import { useRef } from "react";
import RollingText, { RollingTextHandle } from "../components/rolling-text";

import Image from "next/image";
import Link from "next/link";
import Star from "@/assets/icons/star.webp";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const hero = useRef(null);

  const rollingTextRef = useRef<RollingTextHandle>(null);

  const hover = () => {
    if (rollingTextRef.current) {
      rollingTextRef.current.exportHover();
    }
  };

  const exit = () => {
    if (rollingTextRef.current) {
      rollingTextRef.current.exportExit();
    }
  };

  useGSAP(
    () => {
      const HeroSplit = new SplitText(".split-item", {
        type: "chars",
        charsClass: "hero-char",
      });

      gsap.set(".hero-char", { yPercent: 100 });

      gsap.to(".hero-char", {
        yPercent: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.05,
        delay: 6.3,
      });

      gsap.to(".star", {
        y: 0,
        autoAlpha: 1,
        rotate: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: 7.1,
      });

      gsap.to(".star", {
        rotate: -360,
        duration: 8,
        repeat: -1,
        delay: 8.65,
        ease: "none",
      });

      gsap.to(".and", {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: "power3.out",
        delay: 7.3,
      });

      gsap.to(".intro-text p", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 7.8,
      });

      gsap.to(".roll", {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        delay: 9,
      });

      gsap.to(".aura", {
        scale: 2.35,
        opacity: 0,
        duration: 1.75,
        repeat: -1,
        ease: "sine.out",
        delay: 10,
        rotation: 0.01,
      });

      return () => {
        HeroSplit.revert();
      };
    },
    { scope: hero },
  );

  return (
    <div
      ref={hero}
      className="h-svh w-screen flex relative flex-col justify-center items-center p-5 md:p-15"
    >
      <div className="h-fit w-full flex flex-col justify-center items-center font-bold tracking-[-2%]">
        <div className="intro-text w-full flex justify-between items-center text-[10.5px] md:text-2xl overflow-hidden leading-normal">
          <p className="translate-y-full">{"<Based in Indonesia />"}</p>
          <p className="translate-y-full">
            {"I'm"}
            <span className="font-sub italic">{" Nobbel"}</span>
          </p>
          <p className="translate-y-full">{"// UI/UX Designer & Developer"}</p>
        </div>

        <div className="hero w-full flex flex-col md:flex-row justify-between items-start md:items-center uppercase">
          <h1 className="split-item overflow-hidden leading-none">
            Visual <span className="font-sub italic mr-0.5">Tinkerer</span>
          </h1>

          <div className="md:hidden w-full flex mt-2">
            <div className="relative flex flex-col text-xs justify-center items-center lowercase mr-3">
              <Image
                src={Star}
                alt="star"
                width={92}
                height={92}
                className="star invisible opacity-0 rotate-60 translate-y-7 size-9"
              />
              <p className="and absolute -bottom-3.5 translate-y-2.5 opacity-0">
                and
              </p>
            </div>

            <h1 className="split-item overflow-hidden leading-none">
              Engineer
            </h1>
          </div>

          <div className="hidden relative md:flex flex-col text-lg justify-center items-center lowercase mr-0">
            <Image
              src={Star}
              alt="star"
              width={92}
              height={92}
              className="star invisible opacity-0 rotate-60 translate-y-12.5 size-23"
            />
            <p className="and absolute -bottom-7 translate-y-2.5 opacity-0">
              and
            </p>
          </div>

          <h1 className="split-item invisible md:visible overflow-hidden leading-none">
            Engineer
          </h1>
        </div>
      </div>

      <div>
        <Link
          href=""
          onMouseEnter={hover}
          onMouseLeave={exit}
          className="roll relative translate-y-12 opacity-0 invisible flex justify-center items-center bg-acc-dark pl-7 pr-8 py-6 text-light rounded-full mt-15"
        >
          <div className="size-3.5 bg-green-500 rounded-full mr-4 pointer-events-none" />
          <div className="absolute aura left-7 size-3.5 bg-green-500 rounded-full mr-4 pointer-events-none" />
          <RollingText
            ref={rollingTextRef}
            text="Contact Me"
            size="16px"
            customClass="font-bold"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
