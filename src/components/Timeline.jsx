const timeline = [
  {
    year: "2025",
    title: "Master Data Science Program",
    desc: "Started advanced learning in Data Science, Machine Learning, SQL and AI.",
  },
  {
    year: "2026",
    title: "Luxury Housing Sales Analysis",
    desc: "Built Power BI dashboards and SQL analytics pipeline.",
  },
  {
    year: "2026",
    title: "Content Monetization Modeler",
    desc: "Predicted YouTube revenue using Machine Learning.",
  },
  {
    year: "2026",
    title: "Comment Toxicity Detection",
    desc: "Developed LSTM-based NLP classification model.",
  },
  {
    year: "2026",
    title: "Intelligent Document Assistant",
    desc: "Built a RAG-based AI assistant using LangChain and FAISS.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 lg:py-28 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Learning & Building
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-slate-700" />

          <div className="space-y-10">

            {timeline.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative pl-10"
              >

                <div className="absolute left-0 top-1.5 w-[19px] h-[19px] rounded-full bg-sky-500 border-4 border-slate-900 shadow-lg shadow-sky-500/20" />

                <p className="text-sm font-semibold text-sky-400">
                  {item.year}
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mt-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 leading-7 max-w-2xl">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}