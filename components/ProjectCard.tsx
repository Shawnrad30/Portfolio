type Project = {
  title: string;
  description: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-blue-400/20 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-400/10 hover:shadow-[0_0_25px_rgba(96,165,250,0.25)]">
      <h3 className="text-xl font-bold">{project.title}</h3>

      <p className="mt-3 text-gray-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-blue-400/20 px-3 py-1 text-xs text-blue-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}