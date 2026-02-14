"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

import { useRef, forwardRef, useImperativeHandle } from "react";

gsap.registerPlugin(SplitText);

interface TextProps {
  size: string;
  customClass: string;
  text: string;
}

export interface RollingTextHandle {
  exportHover: () => void;
  exportExit: () => void;
}

const RollingText = forwardRef<RollingTextHandle, TextProps>(
  ({ size, customClass, text }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP(
      () => {
        const TextSplit = new SplitText(".split-text", {
          type: "chars",
          charsClass: "text-char",
        });

        return () => {
          TextSplit.revert();
        };
      },
      { scope: containerRef },
    );

    const exportHover = contextSafe(() => {
      gsap.to(".text-char", {
        y: "-100%",
        stagger: {
          amount: 0.2,
          grid: "auto",
        },
        duration: 0.35,
        ease: "power3.out",
      });
    });

    const exportExit = contextSafe(() => {
      gsap.to(".text-char", {
        y: 0,
        stagger: {
          amount: 0.2,
          grid: "auto",
        },
        duration: 0.35,
        ease: "power3.out",
      });
    });

    useImperativeHandle(ref, () => ({
      exportHover,
      exportExit,
    }));

    return (
      <div
        ref={containerRef}
        className={`leading-tight overflow-hidden flex flex-col ${customClass}`}
        style={{ fontSize: size, height: `calc(${size}*1.25)` }}
      >
        <div className="split-text">{text}</div>
        <div className="split-text">{text}</div>
      </div>
    );
  },
);

RollingText.displayName = "RollingText";

export default RollingText;
