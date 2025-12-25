export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="bg-main-red w-full h-1/2"></div>
      <div className="absolute bottom-0 flex w-full justify-between items-end">
        <div className="text-[200px] leading-[.9] font-light hover:font-extrabold transition-all duration-600">Portfolio</div>
        <div className="text-[50px] leading-[1.4] mr-2 font-light hover:font-extrabold transition-all duration-600">©2025</div>
      </div>
    </div>
  );
}
