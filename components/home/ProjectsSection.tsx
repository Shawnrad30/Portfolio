import Section from "../Section";
import ProjectCard from "../ProjectCard";
import { projects } from "../../lib/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Core Projects" subtitle="Cytosine" darker>
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}