import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.2-2.6 5.6-.9.9-1.4 2-1.4 3.4H9c0-1.4-.5-2.5-1.4-3.4C6.2 13.2 5 11.4 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
      </svg>
    ),
    title: "Reasoning that feels human",
    copy: "Aevum plans multi-step work the way a brilliant chief of staff would — breaking down goals, weighing tradeoffs, and explaining every decision.",
    accent: "from-violet-500/30 to-transparent",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2" />
      </svg>
    ),
    title: "Memory that never sleeps",
    copy: "Every preference, project, and past decision is woven into a living memory — so Aevum gets sharper the longer you work together.",
    accent: "from-blue-500/30 to-transparent",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
      </svg>
    ),
    title: "Action at the speed of thought",
    copy: "Connected to 40+ tools and your entire stack, Aevum doesn't just advise — it drafts, schedules, deploys, and closes the loop for you.",
    accent: "from-cyan-400/25 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="glow-orb left-[20%] top-[10%] h-72 w-72 bg-violet-800/15" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.28em] text-violet-300/80">
            WHY AEVUM
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Not another chatbot.{" "}
            <span className="shimmer-text">A mind for your mission.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-400">
            Three pillars engineered together — so the whole feels less like
            software, and more like a second brain.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <div className="glass card-hover group relative h-full overflow-hidden rounded-3xl p-8">
                <div
                  className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${f.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-blue-500/15 text-violet-200 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-400">{f.copy}</p>
                  <a
                    href="#platform"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
