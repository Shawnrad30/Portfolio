import AboutHighlight from "../AboutHighlight";
import { aboutHighlights } from "../../lib/aboutHighlights";
import Section from "../Section";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Adenine" darker>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="text-xl leading-9 text-gray-200">
            I began as a molecular biologist, driven by the possibility that science
            could transform human health.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            Over time, I became increasingly interested in the computational systems
            behind discovery: how data, software, and engineering can make biology
            more predictive, scalable, and reliable.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            Today, I am building at that intersection—combining scientific thinking
            with data science and software development to work toward meaningful
            biological impact.
          </p>
      </div>

      <div className="space-y-8">
        {aboutHighlights.map((highlight, index) => (
          <AboutHighlight
            key={highlight.title}
            title={highlight.title}
            description={highlight.description}
            number={index + 1}
          />
        ))}
      </div>
    </div>
    </Section>
  );
}