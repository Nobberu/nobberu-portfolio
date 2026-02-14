"use client";

import { useGSAP } from "@gsap/react";

import Wridev from "@/assets/images/wridev.webp";

import { useState } from "react";
import Works from "../components/works";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useGSAP(() => {}, []);
  return (
    <div className="bg-light w-screen h-[300vh] flex flex-col px-30">
      <h1 className="text-5xl py-20">Selected Works</h1>
      <div className="relative w-full text-2xl">
        <Works
          src={Wridev}
          text="Wridev Website"
          number={1}
          customClass="left-10"
          parallaxSpeed={0.02}
          hoveredId={hoveredId}
          setHovered={setHoveredId}
          description={"Innovative Design For Modern Web"}
        />

        <Works
          src={Wridev}
          text="Jurni Website"
          number={2}
          customClass="top-100 right-10"
          parallaxSpeed={0.03}
          hoveredId={hoveredId}
          setHovered={setHoveredId}
          description={"Innovative Design For Modern Web"}
        />

        <Works
          src={Wridev}
          text="Wridev Website"
          number={3}
          customClass="top-200 left-10"
          parallaxSpeed={0.04}
          hoveredId={hoveredId}
          setHovered={setHoveredId}
          description={"Innovative Design For Modern Web"}
        />
      </div>
    </div>
  );
};

export default Projects;
