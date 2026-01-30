import Loading from "./Home/loading";
import Hero from "./Home/hero";
import About from "./Home/about";
import Cta from "./Home/cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Loading />
      <Hero />
      <About />
      <Cta />
      <div className="h-screen w-screen" />
    </main>
  );
}
