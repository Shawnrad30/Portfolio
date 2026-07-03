const navItems = [
  { base: "A", label: "About Me" },
  { base: "T", label: "Tech Stack" },
  { base: "C", label: "Core Projects" },
  { base: "G", label: "Genome" },
];

export default function DNANav() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:flex md:gap-6">
      {navItems.map((item) => (
        <button
          key={item.base}
          className="group rounded-xl border border-blue-400/30 px-6 py-4 transition hover:border-blue-300 hover:bg-blue-400/10"
        >
          <span className="block text-3xl font-bold">{item.base}</span>
          <span className="mt-1 block text-sm text-gray-400 group-hover:text-blue-200">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}