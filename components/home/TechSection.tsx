import Section from "../Section";
import { techStack } from "../../lib/techStack";

export default function TechSection() {
  return (
    <Section id="tech" title="Technology Stack" subtitle="Thymine">
      <div className="grid gap-4 md:grid-cols-3">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="rounded-xl border border-blue-400/20 bg-white/5 p-5"
          >
            {tech}
          </div>
        ))}
      </div>
    </Section>
  );
}