"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Starter",
    tagline: "For the curious",
    monthly: 0,
    annual: 0,
    cta: "Start for free",
    featured: false,
    features: ["1 workspace", "Core assistant + memory", "5 tool integrations", "Community support"],
  },
  {
    name: "Pro",
    tagline: "For builders & teams",
    monthly: 29,
    annual: 24,
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Everything in Starter",
      "Aevum OS v2.0 reasoning engine",
      "40+ tool integrations",
      "Unlimited memory & projects",
      "Priority latency (12ms)",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For organizations",
    monthly: -1,
    annual: -1,
    cta: "Talk to sales",
    featured: false,
    features: ["Everything in Pro", "SSO / SCIM & audit logs", "Zero-retention mode", "Dedicated success manager", "Custom SLAs & DPAs"],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="glow-orb left-[15%] top-[25%] h-96 w-96 bg-violet-800/20" />
      <div className="glow-orb right-[10%] bottom-[10%] h-80 w-80 bg-blue-800/15" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.28em] text-violet-300/80">
            PRICING
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Luxury intelligence, <span className="text-gradient">honest pricing.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-400">
            Start free. Upgrade when Aevum becomes indispensable — it will.
          </p>
        </Reveal>

        {/* toggle */}
        <Reveal delay={250}>
          <div className="mt-9 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual((v) => !v)}
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              className="relative h-8 w-14 rounded-full bg-white/10 ring-1 ring-white/15 transition-colors hover:bg-white/15"
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 shadow-glow transition-all duration-300 ${
                  annual ? "left-7" : "left-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-white" : "text-gray-500"}`}>
              Annual
              <span className="ml-2 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                −17%
              </span>
            </span>
          </div>
        </Reveal>

        {/* cards */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <Reveal key={plan.name} delay={i * 120} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    plan.featured
                      ? "glass-strong shadow-glow ring-1 ring-violet-400/30 lg:scale-[1.04]"
                      : "glass card-hover"
                  }`}
                >
                  {plan.featured && (
                    <>
                      <div className="glow-orb left-1/2 top-[-20%] h-48 w-64 -translate-x-1/2 bg-violet-600/30" />
                      <span className="btn-primary absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold tracking-wide text-white">
                        MOST POPULAR
                      </span>
                    </>
                  )}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>
                    <div className="mt-6 flex items-end gap-2">
                      {price >= 0 ? (
                        <>
                          <span className="text-5xl font-bold tracking-tight text-white">
                            ${price}
                          </span>
                          <span className="pb-1.5 text-sm text-gray-500">
                            / mo{annual && price > 0 ? ", billed annually" : ""}
                          </span>
                        </>
                      ) : (
                        <span className="text-5xl font-bold tracking-tight text-white">Custom</span>
                      )}
                    </div>
                    <a
                      href="#top"
                      className={`mt-7 block rounded-2xl px-6 py-3.5 text-center text-sm font-semibold ${
                        plan.featured ? "btn-primary text-white" : "btn-ghost text-white"
                      }`}
                    >
                      {plan.cta}
                    </a>
                    <ul className="mt-8 space-y-3.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round">
                              <path d="M4 12.5l5 5L20 6.5" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-gray-500">
            All plans include end-to-end encryption · Cancel anytime · No credit card required to start
          </p>
        </Reveal>
      </div>
    </section>
  );
}
