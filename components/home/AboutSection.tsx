import Section from "../Section";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Adenine" darker>
      <p className="max-w-3xl text-lg leading-8 text-gray-300">
        I’m a molecular biologist and data scientist building toward a career at
        the intersection of biology, software, and computational systems.
      </p>
    </Section>
  );
}