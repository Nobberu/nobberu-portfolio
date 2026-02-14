"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cta",
          start: "top top",
          end: "center top",
          scrub: true,
        },
      })
      .to(".l-open", { x: 1000 }, 0)
      .to(".r-open", { x: -1000 }, 0);
  }, []);
  return (
    <div
      id="cta"
      className="h-[300dvh] w-screen flex items-center justify-center bg-light"
    >
      <div className="r-open sticky h-full w-1/2 bg-dark/20"></div>
      <div className="l-open sticky h-full w-1/2 bg-dark/20"></div>
    </div>
  );
};

export default Cta;
