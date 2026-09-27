Aevum — AI SaaS Landing Page
A premium, dark cinematic landing page for Aevum, an advanced AI assistant platform. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS — ready to push to GitHub and deploy on Vercel.

Tech stack
Next.js 14.2 (App Router) + React 18 + TypeScript
Tailwind CSS 3.4 with a custom design system (app/globals.css)
next/font (Inter + Instrument Serif italic accent)
Zero heavy animation dependencies — scroll reveals via a lightweight IntersectionObserver hook (components/Reveal.tsx)
Local development
npm install
npm run dev
Open http://localhost:3000.

Production build
npm run build
npm start
Push to GitHub
cd aevum-web
git init -b main
git add .
git commit -m "feat: Aevum AI SaaS landing page"
Create a new repository on GitHub (e.g. aevum-web), then:

git remote add origin git@github.com:<your-username>/aevum-web.git
git push -u origin main
node_modules/, .next/, and build artifacts are already excluded via .gitignore — they will not be committed.

Deploy on Vercel
Go to vercel.com → Add New… → Project.
Import the aevum-web GitHub repository.
Vercel auto-detects Next.js — keep the defaults:
Framework Preset: Next.js
Build Command: npm run build
Output Directory: (default)
Click Deploy.
Every push to main redeploys automatically. To use a custom domain, add it under Project → Settings → Domains.

Project structure
aevum-web/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Page composition
│   └── globals.css       # Design system: glass, glows, grain, keyframes
├── components/
│   ├── Navbar.tsx        # Floating glass navbar + mobile menu
│   ├── Hero.tsx          # Badge, headline, CTAs, stats
│   ├── AssistantVisual.tsx # 3D-style AI robot on pedestal + status cards
│   ├── Features.tsx      # 3 premium feature cards
│   ├── Capabilities.tsx  # Interactive platform tabs
│   ├── Demo.tsx          # Animated product console preview
│   ├── Testimonials.tsx  # Logo marquee + quotes
│   ├── Pricing.tsx       # Monthly/annual toggle
│   ├── FinalCta.tsx      # Closing conversion panel
│   ├── Footer.tsx        # Premium footer
│   └── Reveal.tsx        # Scroll-reveal wrapper (IntersectionObserver)
├── tailwind.config.ts
├── next.config.mjs
└── postcss.config.mjs
