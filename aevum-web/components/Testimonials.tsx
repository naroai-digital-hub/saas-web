import Reveal from "./Reveal";

const LOGOS = ["Vertex", "Northloop", "Quantia", "Helios", "Arcadia", "Lumen", "Craftly", "Orbital"];

const QUOTES = [
  {
    quote: "Aevum didn't just save us time — it changed how our whole company thinks. It briefs itself, follows up itself, and never drops a thread.",
    name: "Maya Chen",
    role: "COO, Northloop",
    initials: "MC",
    tint: "from-violet-500 to-indigo-600",
  },
  {
    quote: "I've used every AI tool on the market. Nothing feels like this. The memory, the polish, the way it just handles things — it's in a league of its own.",
    name: "Darius Cole",
    role: "Founder, Quantia",
    initials: "DC",
    tint: "from-blue-500 to-cyan-500",
  },
  {
    quote: "Our board deck, investor updates, hiring pipeline — Aevum runs the operational layer of the company while we focus on the vision. Absurd leverage.",
    name: "Sofia Marchetti",
    role: "CEO, Helios",
    initials: "SM",
    tint: "from-fuchsia-500 to-violet-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-orb right-[25%] top-[10%] h-72 w-72 bg-indigo-800/15" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.28em] text-violet-300/80">
            LOVED WORLDWIDE
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Teams that switched, <span className="shimmer-text">never looked back.</span>
          </h2>
        </Reveal>

        {/* logo marquee */}
        <Reveal delay={200}>
          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex w-max gap-14 pr-14">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-xl font-semibold tracking-tight text-gray-600 transition-colors hover:text-gray-300"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* quotes */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 120}>
              <figure className="glass card-hover flex h-full flex-col rounded-3xl p-8">
                <div className="flex gap-1 text-violet-300">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-gray-300">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${q.tint} text-sm font-bold text-white`}>
                    {q.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{q.name}</p>
                    <p className="text-sm text-gray-500">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
