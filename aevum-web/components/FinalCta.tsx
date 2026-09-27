import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center shadow-card sm:px-16 sm:py-24">
            {/* interior ambience */}
            <div className="glow-orb left-1/2 top-[-30%] h-96 w-[720px] -translate-x-1/2 bg-violet-700/30 animate-glow-breathe" />
            <div className="glow-orb bottom-[-40%] left-[10%] h-64 w-64 bg-blue-700/25" />
            <div className="glow-orb bottom-[-40%] right-[10%] h-64 w-64 bg-cyan-600/15" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.28em] text-violet-300/80">
                READY WHEN YOU ARE
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
                Meet the mind that{" "}
                <em className="font-serif font-normal italic text-gradient">
                  elevates
                </em>{" "}
                everything you do.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                Join 40,000+ teams already working at the speed of thought.
                Your first workspace is free — set up in under two minutes.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="btn-primary w-full rounded-2xl px-10 py-4 text-base font-semibold text-white sm:w-auto"
                >
                  Get started free
                </a>
                <a
                  href="#demo"
                  className="btn-ghost w-full rounded-2xl px-10 py-4 text-base font-semibold text-white sm:w-auto"
                >
                  Talk to sales
                </a>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                No credit card required · Cancel anytime · SOC 2 Type II
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
