import Section from "../Section";

export default function GoalsSection() {
  return (
    <Section id="goals" title="Goals" subtitle="Guanine">
      <p className="max-w-3xl text-lg leading-8 text-gray-300">
        This section will describe where I’m going next: AI for biology, protein
        modeling, drug discovery, and building tools that make biology more
        scalable and reliable.
      </p>
    </Section>
  );
}