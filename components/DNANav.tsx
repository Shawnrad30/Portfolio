const navItems = [
  { base: "A", label: "About Me", href: "#about" },
  { base: "T", label: "Tech Stack", href: "#tech" },
  { base: "C", label: "Core Projects", href: "#projects" },
  { base: "G", label: "Goals", href: "#goals" },
];

export default function DNANav() {
  return (
    <nav className="mt-10 grid grid-cols-2 gap-4 md:flex md:gap-6">
      {navItems.map((item) => (
        <a
          key={item.base}
          href={item.href}
          className="group rounded-xl border border-blue-400/30 bg-black/40 px-6 py-4 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-400/10 hover:shadow-[0_0_25px_rgba(96,165,250,0.35)]"
        >
          <span className="block text-3xl font-bold">{item.base}</span>
          <span className="mt-1 block text-sm text-gray-400 group-hover:text-blue-200">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}