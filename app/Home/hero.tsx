"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const hero = useRef(null);

  useGSAP(
    () => {
      const HeroSplit = new SplitText(".split-item", {
        type: "chars",
        charsClass: "hero-char",
      });

      const ButtonSplit = new SplitText(".split-button", {
        type: "chars",
        charsClass: "button-char",
      });

      const contact = hero.current.querySelector(".contact");

      gsap.set(".hero-char", { yPercent: 100 });

      gsap.to(".hero-char", {
        yPercent: 0,
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

      gsap.to(".star", {
        rotate: -360,
        duration: 8,
        repeat: -1,
        delay: 9.65,
        ease: "none",
      });

      gsap.to(".and", {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: "power3.out",
        delay: 8.3,
      });

      gsap.to(".intro-text p", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 8.8,
      });

      gsap.to(".contact", {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        delay: 10,
      });

      gsap.to(".aura", {
        scale: 2.35,
        opacity: 0,
        duration: 1.75,
        repeat: -1,
        ease: "sine.out",
        delay: 11,
        rotation: 0.01,
      });

      contact.addEventListener("mouseenter", () => {
        gsap.to(".button-char", {
          y: "-100%",
          stagger: {
            amount: 0.3,
            grid: "auto",
          },
          duration: 0.5,
          ease: "power3.inOut",
        });
      });
      contact.addEventListener("mouseout", () => {
        gsap.to(".button-char", {
          y: 0,
          stagger: {
            amount: 0.3,
            grid: "auto",
          },
          duration: 0.5,
          ease: "power3.inOut",
        });
      });

      return () => {
        HeroSplit.revert();
        ButtonSplit.revert();
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
          <p className="translate-y-full">{"I'm Nobbel"}</p>
          <p className="translate-y-full">{"// UI/UX Designer & Developer"}</p>
        </div>

        <div className="hero w-full flex flex-col md:flex-row justify-between items-start md:items-center uppercase">
          <h1 className="split-item overflow-hidden leading-none">
            Visual Tinkerer
          </h1>

          <div className="md:hidden w-full flex mt-2">
            <div className="relative flex flex-col text-xs justify-center items-center lowercase mr-3">
              <Image
                src="/star.webp"
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
              src="/star.webp"
              alt="star"
              width={92}
              height={92}
              className="star invisible opacity-0 rotate-60 translate-y-12.5 size-23"
            />
            <p className="and absolute -bottom-6.5 translate-y-2.5 opacity-0">
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
          className="contact relative translate-y-12 opacity-0 invisible flex justify-center items-center bg-acc-dark pl-7 pr-8 py-6 text-light rounded-full mt-15"
        >
          <div className="size-3.5 bg-green-500 rounded-full mr-4 pointer-events-none" />
          <div className="absolute aura left-7 size-3.5 bg-green-500 rounded-full mr-4 pointer-events-none" />
          <div className="leading-none h-4 pointer-events-none overflow-hidden flex flex-col font-bold">
            <div className="split-button">Contact Me</div>
            <div className="split-button">Contact Me</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
