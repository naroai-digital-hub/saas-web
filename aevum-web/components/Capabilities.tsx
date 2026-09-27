"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const TABS = [
  {
    id: "reason",
    label: "Deep Reasoning",
    title: "Think through anything, step by step",
    copy: "Aevum OS v2.0 decomposes complex objectives into transparent plans. Watch it weigh options, cite sources, and course-correct in real time — no black box.",
    points: ["Multi-step planning with visible logic", "Self-correction and confidence scoring", "Cites every source it touches"],
    stat: { value: "4.2x", label: "faster complex decisions" },
  },
  {
    id: "memory",
    label: "Living Memory",
    title: "It remembers what matters",
    copy: "Projects, preferences, people, past calls — Aevum builds a private knowledge graph of your world and recalls the right detail at the right moment.",
    points: ["Persistent, scoped, and editable memory", "Team-shared context with permissions", "You own it — export or wipe anytime"],
    stat: { value: "92%", label: "fewer repeated briefings" },
  },
  {
    id: "tools",
    label: "Tool Orchestration",
    title: "Forty tools, one command",
    copy: "From calendars to codebases to CRMs, Aevum acts inside the apps you already use. Ask once — it drafts, books, files, and follows up.",
    points: ["Native integrations with 40+ platforms", "Custom API actions in minutes", "Human-in-the-loop approvals built in"],
    stat: { value: "11hrs", label: "saved per user weekly" },
  },
  {
    id: "security",
    label: "Enterprise Trust",
    title: "Luxury-grade privacy, by default",
    copy: "SOC 2 Type II, GDPR, and end-to-end encryption on every plan. Your data trains nothing but your own experience — never shared, never sold.",
    points: ["SOC 2 Type II & ISO 27001 certified", "Zero-retention mode available", "SSO, SCIM, and audit logs on Scale"],
    stat: { value: "0", label: "data breaches, ever" },
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section id="platform" className="relative py-24 sm:py-32">
      <div className="glow-orb right-[10%] top-[30%] h-80 w-80 bg-blue-800/15" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.28em] text-violet-300/80">
            THE PLATFORM
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One core. <span className="text-gradient">Infinite leverage.</span>
          </h2>
        </Reveal>

        {/* tabs */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active === t.id
                    ? "btn-primary text-white"
                    : "btn-ghost text-gray-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* panel */}
        <Reveal delay={100}>
          <div className="glass-strong relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl p-8 shadow-card sm:p-12">
            <div className="glow-orb left-[-10%] top-[-30%] h-64 w-64 bg-violet-700/25" />
            <div key={tab.id} className="animate-rise-in relative grid gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {tab.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-400">{tab.copy}</p>
                <ul className="mt-6 space-y-3">
                  {tab.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round">
                          <path d="M4 12.5l5 5L20 6.5" />
                        </svg>
                      </span>
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center md:justify-center">
                <div className="glass rounded-3xl px-10 py-8 text-center">
                  <p className="text-gradient text-5xl font-bold">{tab.stat.value}</p>
                  <p className="mt-2 text-sm text-gray-400">{tab.stat.label}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
