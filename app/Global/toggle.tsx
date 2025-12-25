"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RedirectToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOn, setIsOn] = useState(pathname.startsWith("/Full"));

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);

    if (newState === true) {
      setTimeout(() => {
        router.push("/Full");
      }, 300);
    } else {
      setTimeout(() => {
        router.push("/");
      }, 300);
    }
  };

  return (
    <button
      aria-label="Mode Toggle"
      onClick={toggleSwitch}
      className={`
        w-12 h-6 rounded-full transition-colors duration-300 ease-in-out flex items-center
        ${isOn ? "bg-main-red" : "bg-gray-300"}
      `}
    >
      <div
        className={`
          bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out
          ${isOn ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
}
