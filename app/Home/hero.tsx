export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-full h-full relative flex justify-center items-center">
        <img
          src="straight.webp"
          alt=""
          className="absolute right-180 rotate-180 pointer-events-none w-10"
        />
        <p className="absolute right-90 pointer-events-none">
          Hover anywhere to see the negative effect.
        </p>
        {/* <img
          src="aul.JPG"
          alt=""
          className="h-1/2 hover:h-2/3 w-full object-cover transition-all duration-450 "
        /> */}
      </div>
      <div className="absolute bottom-0 flex w-full justify-between items-end">
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
