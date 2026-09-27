export default function AssistantVisual() {
  return (
    <div className="relative mx-auto flex h-[480px] w-full max-w-[520px] items-center justify-center sm:h-[560px]">
      {/* ambient background glows */}
      <div className="glow-orb left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-violet-700/30 animate-glow-breathe" />
      <div className="glow-orb left-[12%] top-[8%] h-40 w-40 bg-blue-600/25" />
      <div className="glow-orb bottom-[10%] right-[8%] h-44 w-44 bg-cyan-500/15" />

      {/* orbit rings */}
      <div className="absolute left-1/2 top-[38%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
        <div className="h-full w-full rounded-full border border-dashed border-violet-400/25 [transform:rotateX(72deg)]" />
      </div>
      <div className="absolute left-1/2 top-[38%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-spin-reverse">
        <div className="h-full w-full rounded-full border border-dotted border-blue-400/25 [transform:rotateX(72deg)]" />
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_6px_rgba(103,232,249,0.7)]" />
      </div>

      {/* ===== robot head (floating) ===== */}
      <div className="absolute left-1/2 top-[6%] -translate-x-1/2 animate-float">
        <div className="relative h-56 w-56 sm:h-64 sm:w-64">
          {/* halo glow behind head */}
          <div className="absolute inset-[-24px] rounded-full bg-gradient-to-br from-violet-600/40 via-indigo-600/20 to-blue-600/30 blur-2xl animate-glow-breathe" />

          {/* antenna */}
          <div className="absolute left-1/2 top-[-26px] flex -translate-x-1/2 flex-col items-center">
            <div className="h-6 w-[3px] rounded-full bg-gradient-to-b from-violet-300 to-transparent" />
            <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_8px_rgba(103,232,249,0.65)] animate-pulse-dot text-cyan-300" />
          </div>

          {/* dome */}
          <div
            className="absolute inset-0 rounded-[46%] shadow-[inset_-18px_-24px_50px_rgba(0,0,0,0.75),inset_14px_16px_40px_rgba(167,139,250,0.18)]"
            style={{
              background:
                "radial-gradient(circle at 32% 22%, rgba(196,181,253,0.35) 0%, rgba(76,29,149,0.25) 28%, rgba(15,15,26,0.9) 62%, #06060c 100%)",
            }}
          >
            {/* rim light */}
            <div className="absolute inset-0 rounded-[46%] border border-white/10" />
            <div
              className="absolute inset-0 rounded-[46%]"
              style={{
                background:
                  "conic-gradient(from 200deg, transparent 0deg, rgba(139,92,246,0.35) 40deg, transparent 90deg, transparent 200deg, rgba(59,130,246,0.3) 250deg, transparent 300deg)",
                maskImage: "radial-gradient(circle, transparent 62%, black 63%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 62%, black 63%)",
              }}
            />
          </div>

          {/* visor */}
          <div className="absolute left-1/2 top-[44%] h-[34%] w-[72%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-[999px] bg-black/90 shadow-[inset_0_2px_14px_rgba(0,0,0,1),0_0_30px_rgba(139,92,246,0.25)] border border-white/[0.07]" />
            {/* eyes */}
            <div className="absolute inset-0 flex items-center justify-center gap-10">
              <div className="h-4 w-7 rounded-full bg-gradient-to-r from-violet-300 to-cyan-300 shadow-[0_0_22px_8px_rgba(167,139,250,0.75)] animate-pulse-dot text-violet-300" />
              <div className="h-4 w-7 rounded-full bg-gradient-to-r from-violet-300 to-cyan-300 shadow-[0_0_22px_8px_rgba(167,139,250,0.75)] animate-pulse-dot text-violet-300 [animation-delay:0.4s]" />
            </div>
            {/* visor sheen */}
            <div className="absolute left-[8%] top-[12%] h-[28%] w-[84%] rounded-full bg-gradient-to-b from-white/15 to-transparent" />
          </div>

          {/* side pods */}
          <div className="absolute left-[-14px] top-[46%] h-16 w-7 rounded-full bg-gradient-to-b from-[#1b1b28] to-[#0a0a12] border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
          <div className="absolute right-[-14px] top-[46%] h-16 w-7 rounded-full bg-gradient-to-b from-[#1b1b28] to-[#0a0a12] border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />

          {/* chin plate */}
          <div className="absolute bottom-[6%] left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-violet-400/60 to-transparent blur-[1px]" />
        </div>
      </div>

      {/* energy column between head and pedestal */}
      <div className="absolute left-1/2 top-[52%] h-[22%] w-24 -translate-x-1/2 bg-gradient-to-b from-violet-500/25 via-indigo-500/10 to-transparent blur-md" />

      {/* ===== pedestal platform ===== */}
      <div className="absolute bottom-[4%] left-1/2 w-[78%] max-w-[380px] -translate-x-1/2">
        <div className="relative">
          {/* glow under platform */}
          <div className="pedestal-reflection absolute inset-x-[-20%] top-[30%] h-24" />
          {/* platform top */}
          <div
            className="relative h-20 rounded-[50%] border border-white/15 shadow-[0_18px_50px_-10px_rgba(124,58,237,0.5)]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(139,92,246,0.5) 0%, rgba(76,29,149,0.35) 35%, rgba(10,10,18,0.95) 75%)",
            }}
          >
            <div className="absolute inset-x-[12%] top-[18%] h-[38%] rounded-[50%] bg-gradient-to-b from-white/20 to-transparent" />
            <div className="absolute inset-x-[24%] top-[46%] h-[8%] rounded-[50%] bg-violet-300/70 blur-[3px] animate-pulse-dot text-violet-300" />
          </div>
          {/* platform base shadow */}
          <div className="mx-auto mt-[-8px] h-10 w-[70%] rounded-[50%] bg-black/70 blur-xl" />
        </div>
      </div>

      {/* ===== floating status cards ===== */}
      {/* CORE_ONLINE */}
      <div className="glass absolute left-[2%] top-[16%] rounded-2xl px-4 py-3 animate-float-soft">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse-dot text-emerald-400" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-gray-200">CORE_ONLINE</span>
        </div>
        <p className="mt-1 pl-5 text-[10px] text-gray-500">neural mesh · stable</p>
      </div>

      {/* LATENCY */}
      <div className="glass absolute right-[1%] top-[30%] rounded-2xl px-4 py-3 animate-float-soft [animation-delay:1.2s]">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-200">
          LATENCY <span className="text-gradient">12ms</span>
        </p>
        <div className="mt-2 flex items-end gap-1">
          {[10, 16, 8, 20, 12, 24, 14].map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400"
              style={{ height: `${h}px`, opacity: 0.35 + (i % 3) * 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* AI ACTIVE */}
      <div className="glass absolute bottom-[30%] left-[4%] rounded-2xl px-4 py-3 animate-float-soft [animation-delay:2.1s]">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
              <circle cx="12" cy="12" r="3.5" fill="#a78bfa" stroke="none" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-200">AI ACTIVE</p>
            <p className="text-[10px] text-gray-500">reasoning engine v2</p>
          </div>
        </div>
      </div>

      {/* LIVE SYNC */}
      <div className="glass absolute bottom-[16%] right-[3%] rounded-2xl px-4 py-3 animate-float-soft [animation-delay:0.6s]">
        <div className="flex items-center gap-2.5">
          <svg className="animate-spin-slow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round">
            <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
          </svg>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-200">LIVE SYNC</p>
            <p className="text-[10px] text-gray-500">42 tools connected</p>
          </div>
        </div>
      </div>
    </div>
  );
}
