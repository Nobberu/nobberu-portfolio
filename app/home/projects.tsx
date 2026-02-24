"use client";

import { useGSAP } from "@gsap/react";
import { useState } from "react";
import Works from "../components/works";

import Wridev from "@/assets/images/wridev.webp";
import Ecobara from "@/assets/images/ecobara.webp";
import Smilework from "@/assets/images/smilework.webp";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useGSAP(() => {}, []);
  return (
    <div className="bg-light w-screen h-[300vh] flex flex-col px-30">
      <h1 className="text-5xl py-20 font-sub">Selected Works.</h1>
      <div className="relative w-full text-2xl">
        <Works
          src={Wridev}
          text="Wridev"
          number={1}
          customClass="left-10"
          parallaxSpeed={0.02}
          scrollSpeed={15}
          hoveredId={hoveredId}
          setHovered={setHoveredId}
          title={"Frontend Developer"}
          description='Profile website for "Workshop Riset Informatika" community in Politeknik Negeri Malang.'
        />

        <Works
          src={Smilework}
          text="Smilework"
          number={2}
          customClass="top-100 right-10"
          parallaxSpeed={0.03}
          scrollSpeed={0}
          hoveredId={hoveredId}
          setHovered={setHoveredId}
          title={"UI/UX Designer & Frontend Developer"}
          description='Profile website for "Workshop Riset Informatika" community in Politeknik Negeri Malang.'
        />

        <Works
          src={Ecobara}
          text="Ecobara"
          number={3}
          customClass="top-200 left-20"
          parallaxSpeed={0.04}
          scrollSpeed={30}
          hoveredId={hoveredId}
          setHovered={setHoveredId}
          title={"UI/UX Designer & Frontend Developer"}
          description='Profile website for "Workshop Riset Informatika" community in Politeknik Negeri Malang.'
        />
      </div>
    </div>
  );
};

export default Projects;
