const projects = [
  {
    title: "Intelligent Document Assistant (RAG)",
    image: "/projects/rag.png",
    tech: "Python • LangChain • FAISS • Streamlit • LLMs",
    description:
      "Built a Retrieval-Augmented Generation (RAG) system that allows users to upload documents and ask questions. Implemented document chunking, vector embeddings, semantic search, and context-aware answer generation.",
    github: "https://github.com/Sagar-Bhawal/intelligent-document-assistant.git",
  },

  {
    title: "Comment Toxicity Detection",
    image: "/projects/toxicity.png",
    tech: "Python • TensorFlow • NLP • LSTM • Streamlit",
    description:
      "Developed a deep learning model for real-time toxic comment detection. Applied text preprocessing, tokenization, model training, evaluation, and deployed the solution through a Streamlit web application.",
    github: "https://github.com/Sagar-Bhawal/Comment_Toxicity.git",
  },

  {
    title: "Content Monetization Modeler",
    image: "/projects/monetization.png",
    tech: "Python • Machine Learning • Scikit-Learn • Streamlit",
    description:
      "Built regression models to predict YouTube advertising revenue using engagement metrics from 122,400 records. Achieved R² = 0.95 using Linear Regression and performed extensive feature engineering and model evaluation.",
    github: "https://github.com/Sagar-Bhawal/Content_Monetization_Modeler.git",
  },

  {
    title: "Luxury Housing Sales Analysis",
    image: "/projects/housing.png",
    tech: "Python • SQL • Power BI • ETL",
    description:
      "Designed an end-to-end analytics pipeline for 100,000+ housing records. Performed data cleaning, SQL integration, KPI analysis, and developed interactive Power BI dashboards for business insights.",
    github: "https://github.com/Sagar-Bhawal/luxury-housing-analysis.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800 hover:border-sky-500 transition duration-300"
            >
              
              <h3 className="text-2xl font-semibold mb-3 text-sky-400">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg"
              >
                View Project
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}