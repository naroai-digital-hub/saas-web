import Reveal from "./Reveal";
import AssistantVisual from "./AssistantVisual";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      {/* background ambience */}
      <div className="glow-orb left-[-10%] top-[-5%] h-[480px] w-[480px] bg-violet-800/25" />
      <div className="glow-orb right-[-12%] top-[20%] h-[420px] w-[420px] bg-blue-800/20" />
      <div className="glow-orb bottom-[-20%] left-[30%] h-[380px] w-[520px] bg-indigo-900/20" />
      {/* horizon line glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-8">
        {/* left: copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <a
              href="#platform"
              className="glass group inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-medium text-gray-300 transition-colors hover:text-white"
            >
              <span className="btn-primary rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                NEW
              </span>
              Introducing Aevum OS v2.0
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              The assistant that{" "}
              <em className="font-serif font-normal italic text-gradient">
                thinks
              </em>{" "}
              ahead of you.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400 lg:mx-0">
              Aevum is a premium AI assistant platform that reasons, remembers,
              and acts across your entire workflow — turning hours of busywork
              into moments of clarity. Intelligent, effortless, unmistakably
              yours.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#pricing"
                className="btn-primary w-full rounded-2xl px-8 py-4 text-base font-semibold text-white sm:w-auto"
              >
                Start building free
              </a>
              <a
                href="#demo"
                className="btn-ghost group flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold text-white sm:w-auto"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                </span>
                Watch the demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-500 lg:justify-start">
              <div>
                <p className="text-xl font-semibold text-white">40k+</p>
                <p>teams onboard</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-xl font-semibold text-white">99.99%</p>
                <p>uptime SLA</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-xl font-semibold text-white">12ms</p>
                <p>median latency</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* right: visual */}
        <Reveal delay={250} y={40}>
          <AssistantVisual />
        </Reveal>
      </div>
    </section>
  );
}
