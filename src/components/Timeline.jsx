const timeline = [
  {
    year: "2025",
    title: "Master Data Science Program",
    desc: "Started advanced learning in Data Science, Machine Learning, SQL and AI."
  },

  {
    year: "2026",
    title: "Luxury Housing Sales Analysis",
    desc: "Built Power BI dashboards and SQL analytics pipeline."
  },

  {
    year: "2026",
    title: "Content Monetization Modeler",
    desc: "Predicted YouTube revenue using Machine Learning."
  },

  {
    year: "2026",
    title: "Comment Toxicity Detection",
    desc: "Developed LSTM-based NLP classification model."
  },

  {
    year: "2026",
    title: "Intelligent Document Assistant",
    desc: "Built a RAG-based AI assistant using LangChain and FAISS."
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Journey Timeline
        </h2>

        <div className="space-y-8">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-sky-500 pl-6"
            >
              <h3 className="text-xl font-bold text-sky-400">
                {item.year}
              </h3>

              <h4 className="text-lg font-semibold mt-1">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}