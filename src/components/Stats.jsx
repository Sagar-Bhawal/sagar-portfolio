export default function Stats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        <div className="bg-slate-800 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-sky-400">6+</h2>
          <p className="text-white mt-2">Projects</p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-sky-400">100K+</h2>
          <p className="text-white mt-2">Records Analyzed</p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-sky-400">4+</h2>
          <p className="text-white mt-2">Domains</p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-sky-400">AI</h2>
          <p className="text-white mt-2">ML • NLP • GenAI</p>
        </div>

      </div>
    </section>
  );
}