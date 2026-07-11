type GoalCardProps = {
  title: string;
  description: string;
  number: number;
};

export default function GoalCard({
  title,
  description,
  number,
}: GoalCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300/60 hover:bg-blue-400/10 hover:shadow-[0_0_30px_rgba(96,165,250,0.18)]">
      <span className="text-sm font-medium tracking-[0.25em] text-blue-300/70">
        {String(number).padStart(2, "0")}
      </span>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-300 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}