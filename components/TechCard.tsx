type TechCardProps = {
  name: string;
};

export default function TechCard({ name }: TechCardProps) {
  return (
    <div className="group rounded-xl border border-blue-400/20 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300/60 hover:bg-blue-400/10 hover:shadow-[0_0_25px_rgba(96,165,250,0.2)]">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />

        <span className="font-medium text-gray-200 transition group-hover:text-white">
          {name}
        </span>
      </div>
    </div>
  );
}