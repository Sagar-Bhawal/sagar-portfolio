const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "TensorFlow",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "LangChain",
  "FAISS",
  "Power BI",
  "Tableau",
  "AWS",
  "Git",
  "GitHub",
  "Streamlit",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center hover:border-sky-500 border border-slate-700 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}