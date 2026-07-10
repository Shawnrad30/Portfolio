import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  darker?: boolean;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  darker = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen px-6 py-24 text-white ${
        darker ? "bg-zinc-950" : "bg-black"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-300">
            {subtitle}
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>

          <div className="mt-10">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}