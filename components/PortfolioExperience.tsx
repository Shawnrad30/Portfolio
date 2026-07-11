"use client";

import { useState } from "react";
import AboutSection from "./home/AboutSection";
import GoalsSection from "./home/GoalsSection";
import ProjectsSection from "./home/ProjectsSection";
import TechSection from "./home/TechSection";
import CinematicIntro from "./cinematic/CinematicIntro";
import Hero from "./Hero";

export default function PortfolioExperience() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      <main>
        <Hero />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <GoalsSection />
      </main>
    </>
  );
}