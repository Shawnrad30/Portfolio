import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
        <h2 className="text-4xl font-bold">About Me</h2>
      </section>

      <section id="tech" className="min-h-screen bg-black px-6 py-24 text-white">
        <h2 className="text-4xl font-bold">Technology Stack</h2>
      </section>

      <section id="projects" className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
        <h2 className="text-4xl font-bold">Core Projects</h2>
      </section>

      <section id="genome" className="min-h-screen bg-black px-6 py-24 text-white">
        <h2 className="text-4xl font-bold">Genome</h2>
      </section>
    </>
  );
}