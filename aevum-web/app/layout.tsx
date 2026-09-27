import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aevum — The AI assistant that thinks ahead",
  description:
    "Aevum is a premium AI assistant platform for modern teams. Reason, remember, and act across your entire workflow — with cinematic speed and human warmth.",
  metadataBase: new URL("https://aevum.ai"),
  openGraph: {
    title: "Aevum — The AI assistant that thinks ahead",
    description:
      "A premium AI assistant platform for modern teams. Intelligent, luxurious, futuristic, human-friendly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="grain bg-void text-white antialiased">{children}</body>
    </html>
  );
}
