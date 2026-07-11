import TechCard from "../TechCard";
import Section from "../Section";
import { techStack } from "../../lib/techStack";

export default function TechSection() {
  return (
    <Section id="tech" title="Technology Stack" subtitle="Thymine">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {techStack.map((tech) => (
          <TechCard key={tech} name={tech} />
        ))}
      </div>
    </Section>
  );
}