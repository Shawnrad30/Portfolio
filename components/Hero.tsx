import { siteConfig } from "../lib/siteConfig";
import DNANav from "./DNANav";
import Starfield from "./Starfield";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-16 text-white sm:py-20 lg:py-24">

      {/* Animated Background */}
      <Starfield />
      {/* Blue Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_38%)]" />
      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center">

        <p className="mb-4 animate-fade-up animation-delay-200 text-sm uppercase tracking-[0.4em] text-blue-300">
          Portfolio of {siteConfig.name}
        </p>

        <h1 className="max-w-5xl text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <TypingText text={siteConfig.title} />
        </h1>

        <p className="mt-6 max-w-2xl animate-fade-up animation-delay-500 text-base leading-7 text-gray-300 sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-2 animate-fade-up animation-delay-900">
          <DNANav />
        </div>
        <a
          href="#about"
          className="mt-10 animate-fade-up animation-delay-1200 text-sm text-gray-400 transition hover:text-blue-200 sm:mt-14"
        >
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}