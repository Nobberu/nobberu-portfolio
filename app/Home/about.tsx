"use client";

import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {}, []);
  return (
    <div className="h- bg-dark w-screen flex flex-col px-30">
      <h1 className="text-5xl py-20 border-t border-b">
        Design is the why
        <br />
        Code is the how
      </h1>
    </div>
  );
};

export default About;
