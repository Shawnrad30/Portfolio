type Project = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-blue-400/20 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300/60 hover:bg-blue-400/10 hover:shadow-[0_0_30px_rgba(96,165,250,0.18)]">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-300/70">
        {project.category}
      </p>

      <h3 className="mt-4 text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {project.description}
      </p>

      <div className="mt-6 border-l border-blue-300/30 pl-4">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Key Outcome
        </p>

        <p className="mt-2 leading-7 text-gray-300">
          {project.outcome}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-blue-400/20 px-3 py-1 text-xs text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-blue-300 transition hover:text-blue-100"
      >
        View Project
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}