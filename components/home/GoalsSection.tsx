import GoalCard from "../GoalCard";
import { goals } from "../../lib/goals";
import Section from "../Section";

export default function GoalsSection() {
  return (
    <Section id="goals" title="Goals" subtitle="Guanine">
      <div className="max-w-3xl">
        <p className="text-lg leading-8 text-gray-300">
          I want to work where biology, computation, and engineering
          converge—building systems that help turn scientific understanding
          into real-world impact.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {goals.map((goal, index) => (
          <GoalCard
            key={goal.title}
            title={goal.title}
            description={goal.description}
            number={index + 1}
          />
        ))}
      </div>
    </Section>
  );
}