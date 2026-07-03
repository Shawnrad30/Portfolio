export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
        Portfolio of Shawn Radovic
      </p>

      <h1 className="max-w-4xl text-center text-4xl font-bold md:text-6xl">
        From molecular biology to computational systems.
      </h1>

      <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
        Building tools at the intersection of biology, data science, and software.
      </p>

      <div className="mt-10 flex gap-6 text-3xl font-bold">
        <button>A</button>
        <button>T</button>
        <button>C</button>
        <button>G</button>
      </div>
    </main>
  );
}