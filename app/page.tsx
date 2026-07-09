import { projects } from "../lib/projects";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="About Me" subtitle="Adenine" darker>
        <p className="max-w-3xl text-lg leading-8 text-gray-300">
          I’m a molecular biologist and data scientist building toward a career
          at the intersection of biology, software, and computational systems.
        </p>
      </Section>

      <Section id="tech" title="Technology Stack" subtitle="Thymine">
        <div className="grid gap-4 md:grid-cols-3">
          {["Python", "SQL", "React", "Next.js", "Git", "Tableau"].map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-blue-400/20 bg-white/5 p-5"
            >
              {tech}
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Core Projects" subtitle="Cytosine" darker>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
        ))}
        </div>
      </Section>

      <Section id="goals" title="Goals" subtitle="Guanine">
        <p className="max-w-3xl text-lg leading-8 text-gray-300">
          This section will describe where I’m going next: AI for biology,
          protein modeling, drug discovery, and building tools that make biology
          more scalable and reliable.
        </p>
      </Section>
    </>
  );
}