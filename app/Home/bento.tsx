export default function Bento() {
  return (
    <div className="md:h-screen h-auto w-screen grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 md:py-40 md:px-45 px-6 py-10 md:mt-0 mt-20 overflow-x-hidden">
      <div className="md:col-span-2 md:row-span-3 rounded-3xl border border-neutral-700 md:p-8 p-5 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-bg transition duration-450">
        <span className="text-neutral-400">Insights</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="md:text-9xl text-5xl font-medium mb-2 md:mt-0 mt-4">
            <span className="md:text-8xl text-4xl">🔎</span>6+
          </div>
          <div className="md:text-2xl text-lg font-light md:mb-0 mb-4">Technologies</div>
        </div>
      </div>

      <div className="md:row-span-2 rounded-3xl border border-neutral-700 md:p-6 p-5 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-bg transition duration-450">
        <span className="text-neutral-400">Expertise</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="md:text-6xl text-5xl font-medium md:mt-0 mt-4">100%</div>
          <div className="md:text-sm text-lg font-light md:mb-0 mb-4">On-time</div>
        </div>
      </div>

      <div className="md:row-span-2 rounded-3xl border border-neutral-700 md:p-6 p-5 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-bg transition duration-450">
        <span className="text-neutral-400">Bugs</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="md:text-6xl text-5xl font-medium md:mt-0 mt-4">0</div>
          <div className="md:text-sm text-lg font-light md:mb-0 mb-4">
            Bugs in Prod (lol)
          </div>
        </div>
      </div>

      <div className="md:col-span-2 md:row-span-4 rounded-3xl border border-neutral-700 md:p-8 p-5 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-bg transition duration-450">
        <span className="text-neutral-400 md:text-base text-sm">Overview</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="md:text-9xl text-5xl font-medium mb-2 md:mt-0 mt-4">
            <span className="md:text-8xl text-4xl">⏳</span>1.200+
          </div>
          <div className="md:text-2xl text-lg font-light text-neutral-300 md:mb-0 mb-4">
            Hours of coding
          </div>
        </div>
      </div>

      <div className="md:row-span-3 rounded-3xl border border-neutral-700 md:p-6 p-5 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-bg transition duration-450">
        <span className="text-neutral-400">Github</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="md:text-6xl text-5xl font-medium md:mb-0 mt-4">
            8+
          </div>
          <div className="md:text-sm text-lg font-light md:mb-0 mb-4">
            Open repositories
          </div>
        </div>
      </div>

      <div className="md:row-span-3 rounded-3xl border border-neutral-700 md:p-6 p-5 flex flex-col justify-between hover:-translate-y-4 bg-linear-to-t hover:from-zinc-900 from-bg transition duration-450">
        <span className="text-neutral-400">*Healthy</span>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="md:text-6xl text-5xl font-medium md:mb-0 mt-4">
            200+
          </div>
          <div className="md:text-sm text-lg font-light md:mb-0 mb-4">
            Cups of coffee
          </div>
        </div>
      </div>
    </div>
  );
}
