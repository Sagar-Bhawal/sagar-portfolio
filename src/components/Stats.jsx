const stats = [
  {
    value: "6+",
    label: "End-to-End Projects",
  },
  {
    value: "100K+",
    label: "Records Analyzed",
  },
  {
    value: "4+",
    label: "Data & AI Domains",
  },
  {
    value: "AI",
    label: "ML • NLP • GenAI",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center px-4 py-6 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 transition duration-300"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}