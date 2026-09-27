"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const STEPS = [
  { label: "Listening", detail: "Parsing intent · 3 sources" },
  { label: "Planning", detail: "6-step workflow drafted" },
  { label: "Acting", detail: "Calendar · CRM · Email" },
  { label: "Done", detail: "Summary ready for review" },
];

const MESSAGES = [
  { role: "user", text: "Prep me for tomorrow. Reschedule the design review, brief me on Acme, and draft the follow-up email." },
  { role: "ai", text: "On it. I've moved the design review to 2pm, pulled Acme's latest metrics, and drafted your follow-up — ready to send when you approve." },
];

export default function Demo() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const target = MESSAGES[1].text;
    if (typed >= target.length) {
      const pause = setTimeout(() => setTyped(0), 6000);
      return () => clearTimeout(pause);
    }
    const id = setTimeout(() => setTyped((t) => t + 2), 28);
    return () => clearTimeout(id);
  }, [typed]);

  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="glow-orb left-[30%] top-[20%] h-96 w-96 bg-violet-800/20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.28em] text-violet-300/80">
            LIVE PREVIEW
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Watch it <span className="font-serif italic font-normal text-gradient">work.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-400">
            One sentence in. A finished workflow out. This is Aevum in its
            element.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="glass-strong relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl shadow-card">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <p className="ml-3 text-xs text-gray-500">aevum.app/console</p>
              <span className="ml-auto flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot text-emerald-400" />
                LIVE
              </span>
            </div>

            <div className="grid md:grid-cols-[1fr_240px]">
              {/* chat */}
              <div className="space-y-5 p-6 sm:p-8">
                {MESSAGES.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-4 text-[15px] leading-relaxed ${
                        m.role === "user"
                          ? "rounded-br-md bg-gradient-to-br from-violet-600/40 to-indigo-700/30 text-white ring-1 ring-violet-400/20"
                          : "glass rounded-bl-md text-gray-200"
                      }`}
                    >
                      {m.role === "ai" && (
                        <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-violet-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-dot text-violet-400" />
                          AEVUM
                        </p>
                      )}
                      {m.role === "ai" ? (
                        <span className={typed < MESSAGES[1].text.length ? "caret" : ""}>
                          {MESSAGES[1].text.slice(0, typed)}
                        </span>
                      ) : (
                        m.text
                      )}
                    </div>
                  </div>
                ))}
                {/* action chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["✓ Review moved", "✓ Brief ready", "✓ Draft prepared"].map((c) => (
                    <span key={c} className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* workflow rail */}
              <div className="border-t border-white/[0.07] bg-black/30 p-6 md:border-l md:border-t-0">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-gray-500">WORKFLOW</p>
                <div className="mt-4 space-y-1">
                  {STEPS.map((s, i) => (
                    <div
                      key={s.label}
                      className={`rounded-2xl px-4 py-3 transition-all duration-500 ${
                        i === step
                          ? "bg-violet-500/15 ring-1 ring-violet-400/30"
                          : i < step
                            ? "opacity-70"
                            : "opacity-35"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                            i < step
                              ? "bg-emerald-500/20 text-emerald-300"
                              : i === step
                                ? "bg-violet-500/30 text-violet-200"
                                : "bg-white/10 text-gray-400"
                          }`}
                        >
                          {i < step ? "✓" : i + 1}
                        </span>
                        <p className="text-sm font-semibold text-white">{s.label}</p>
                      </div>
                      <p className="mt-1 pl-[34px] text-xs text-gray-500">{s.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
