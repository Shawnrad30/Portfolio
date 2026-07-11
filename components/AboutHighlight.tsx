type AboutHighlightProps = {
  title: string;
  description: string;
  number: number;
};

export default function AboutHighlight({
  title,
  description,
  number,
}: AboutHighlightProps) {
  return (
    <article className="border-l border-blue-300/30 pl-5">
      <span className="text-sm tracking-[0.25em] text-blue-300/60">
        {String(number).padStart(2, "0")}
      </span>

      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-gray-400">{description}</p>
    </article>
  );
}