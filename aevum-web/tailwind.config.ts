import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050508",
        ink: "#0a0a12",
        panel: "#0d0d17",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(139, 92, 246, 0.55)",
        card: "0 24px 80px -24px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
