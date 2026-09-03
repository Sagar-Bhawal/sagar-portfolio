const skillGroups = [
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
    ],
  },
  {
    title: "AI & NLP",
    skills: [
      "NLP",
      "Generative AI",
      "LangChain",
      "FAISS",
      "RAG",
      "LLM",
    ],
  },
  {
    title: "Analytics & Tools",
    skills: [
      "Power BI",
      "Tableau",
      "AWS Cloud",
      "Streamlit",
      "Git",
      "GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-28 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Tools I Work With
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A practical stack spanning data analysis, machine learning,
            NLP, generative AI and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-sky-500/40 transition duration-300"
            >

              <h3 className="text-lg font-semibold text-white mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-gray-300 hover:text-sky-400 hover:border-sky-500/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}