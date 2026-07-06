import { siteConfig } from "../lib/siteConfig";
import DNANav from "./DNANav";
import Starfield from "./Starfield";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center px-6">

      {/* Animated Background */}
      <Starfield />
      {/* Blue Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_38%)]" />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center">

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
          Portfolio of {siteConfig.name}
        </p>

        <h1 className="max-w-4xl text-center text-4xl font-bold md:text-6xl">
          {siteConfig.title}
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
          {siteConfig.description}
        </p>

        <DNANav />

      </div>
    </section>
  );
}