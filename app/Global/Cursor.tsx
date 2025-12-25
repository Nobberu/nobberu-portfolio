"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor-follow") as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div className="fixed w-5 h-5 rounded-full bg-white pointer-events-none z-50 cursor-follow"></div>
    </div>
  );
}
