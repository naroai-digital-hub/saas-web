"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <nav
        className={`glass-strong flex w-full max-w-5xl items-center justify-between gap-4 rounded-full py-3 pl-5 pr-3 transition-all duration-500 ${
          scrolled ? "shadow-glow" : ""
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-indigo-600 to-blue-600 blur-[2px] transition-all duration-300 group-hover:blur-[6px]" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-indigo-600 to-blue-700" />
            <span className="relative h-3.5 w-3.5 rounded-full bg-white/95 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Aevum
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:inline-block"
          >
            Get started
          </a>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M4 4l10 10M14 4L4 14" />
                </>
              ) : (
                <>
                  <path d="M3 6h12M3 12h12" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-4 top-24 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`glass-strong rounded-3xl p-4 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 block rounded-2xl px-4 py-3 text-center text-base font-semibold text-white"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
