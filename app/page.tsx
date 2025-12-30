import About from "./Home/about";
import Bento from "./Home/bento";
import Hero from "./Home/hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Bento />
    </main>
  );
}
