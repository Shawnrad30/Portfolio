import { projects } from "../lib/projects";
import Hero from "../components/Hero";
import Section from "../components/Section";

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
          {projects.map(
            (project) => (
              <div
                key={project.title}
                className="rounded-xl border border-blue-400/20 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-400/20 px-3 py-1 text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>  
              </div>
            ),
          )}
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