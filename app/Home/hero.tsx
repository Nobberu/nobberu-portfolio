import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-full h-full relative flex justify-center items-center">
        <Image
          src="/straight.webp"
          alt="Straight Arrow"
          className="absolute right-183 rotate-180 pointer-events-none w-10 z-2"
          width={40}
          height={40}
          priority
          fetchPriority="high"
        />
        <p className="absolute right-90 pointer-events-none z-2">
          Hover anywhere to see the negative effect.
        </p>
        <div className="relative h-1/2 hover:h-[calc(100vw/2.35)] w-full transition-all duration-450 z-1">
          <Image
            src="/hero-temp.jpg"
            alt="Hero Image"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-[center_46%]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-between items-end z-2">
        <div className="text-[200px] leading-[.9] font-light hover:font-extrabold transition-all duration-600">
          Portfolio
        </div>
        <div className="text-[50px] leading-[1.4] mr-2 font-light hover:font-extrabold transition-all duration-600">
          ©2025
        </div>
      </div>
    </div>
  );
}
