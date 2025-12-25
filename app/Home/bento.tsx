export default function Bento() {
  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 py-40 px-45">
      <div className="md:col-span-2 md:row-span-3 rounded-3xl border border-neutral-700 p-8 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-zinc-950 transition duration-450">
        <span className="text-neutral-400">Insights</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-9xl font-medium mb-2">
            <span className="text-8xl">🔎</span>6+
          </div>
          <div className="text-2xl font-light">Technologies</div>
        </div>
      </div>

      <div className="md:row-span-2 rounded-3xl border border-neutral-700 p-6 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-zinc-950 transition duration-450">
        <span className="text-neutral-400">Expertise</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-6xl font-medium">100%</div>
          <div className="text-sm font-light">On-time</div>
        </div>
      </div>

      <div className="md:row-span-2 rounded-3xl border border-neutral-700 p-6 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-zinc-950 transition duration-450">
        <span className="text-neutral-400">Bugs</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-6xl font-medium">0</div>
          <div className="text-sm font-light medium">Bugs in Prod (lol)</div>
        </div>
      </div>

      <div className="md:col-span-2 md:row-span-4 rounded-3xl border border-neutral-700 p-8 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-zinc-950 transition duration-450">
        <span className="text-neutral-400">Overview</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-9xl font-medium mb-2">
            <span className="text-8xl">⏳</span>1.200+
          </div>
          <div className="text-2xl font-light text-neutral-300">
            Hours of coding
          </div>
        </div>
      </div>

      <div className="md:row-span-3 rounded-3xl border border-neutral-700 p-6 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-zinc-950 transition duration-450">
        <span className="text-neutral-400">Github</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-6xl font-medium">8+</div>
          <div className="text-sm font-light">Open repositories</div>
        </div>
      </div>

      <div className="md:row-span-3 rounded-3xl border border-neutral-700 p-6 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-zinc-950 transition duration-450">
        <span className="text-neutral-400">*Healthy</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-6xl font-medium">200+</div>
          <div className="text-sm font-light">Cups of coffee</div>
        </div>
      </div>
    </div>
  );
}
