import Hero from "../components/Hero";
import AboutSection from "../components/home/AboutSection";
import TechSection from "../components/home/TechSection";
import ProjectsSection from "../components/home/ProjectsSection";
import GoalsSection from "../components/home/GoalsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <GoalsSection />
    </>
  );
}