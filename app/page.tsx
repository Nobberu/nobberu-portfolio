import Loading from "./home/loading";
import Hero from "./home/hero";
import Projects from "./home/projects";
import Cta from "./home/cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Loading />
      <Hero />
      <Projects />
      <Cta />
    </main>
  );
}
