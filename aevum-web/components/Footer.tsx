const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Platform", "Integrations", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press kit", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Community", "Status", "Templates"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
  },
];

const SOCIALS = [
  {
    label: "X",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L1 2h6.5l4.4 5.9L18.9 2zm-1.1 17.8h1.7L7.4 3.9H5.6l12.2 15.9z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] px-6 pb-10 pt-16">
      <div className="glow-orb left-[40%] top-[-20%] h-56 w-[560px] bg-violet-900/15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-indigo-600 to-blue-600" />
                <span className="relative h-3.5 w-3.5 rounded-full bg-white/95 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">Aevum</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
              The premium AI assistant platform for teams that think ahead.
              Intelligent, luxurious, human-friendly.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="btn-ghost flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SOC 2 Type II", "GDPR", "ISO 27001"].map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-gray-500">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold tracking-[0.22em] text-gray-500">{col.title.toUpperCase()}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="text-sm text-gray-400 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">© 2026 Aevum Labs, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot text-emerald-400" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
