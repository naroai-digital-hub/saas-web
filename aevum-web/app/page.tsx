import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Capabilities from "../components/Capabilities";
import Demo from "../components/Demo";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void">
      <Navbar />
      <Hero />
      <Features />
      <Capabilities />
      <Demo />
      <Testimonials />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  );
}
