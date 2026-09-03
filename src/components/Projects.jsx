import { useEffect, useState } from "react";
import {
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

const featuredProjects = [
  {
    title: "Luxury Housing Sales Analysis",
    tech: "Python • SQL • Power BI • ETL",
    description:
      "Designed an end-to-end analytics pipeline for 100,000+ housing records. Performed data cleaning, SQL integration, KPI analysis, and developed interactive Power BI dashboards for business insights.",
    github:
      "https://github.com/Sagar-Bhawal/luxury-housing-analysis.git",
  },

  {
    title: "Content Monetization Modeler",
    tech: "Python • Scikit-Learn • Machine Learning • Streamlit",
    description:
      "Built regression models to predict YouTube advertising revenue using engagement metrics from 122,400 records. Achieved R² = 0.95 using Linear Regression and performed extensive feature engineering and model evaluation.",
    github:
      "https://github.com/Sagar-Bhawal/Content_Monetization_Modeler.git",
  },

  {
    title: "Comment Toxicity Detection",
    tech: "Python • TensorFlow • NLP • LSTM • Streamlit",
    description:
      "Developed a deep learning model for real-time toxic comment detection. Applied text preprocessing, tokenization, model training, evaluation, and deployed the solution through a Streamlit web application.",
    github:
      "https://github.com/Sagar-Bhawal/Comment_Toxicity.git",
  },

  {
    title: "Intelligent Document Assistant",
    tech: "Python • LangChain • FAISS • RAG • Streamlit",
    description:
      "Built a Retrieval-Augmented Generation system that allows users to upload documents and ask questions. Implemented document chunking, vector embeddings, semantic search, and context-aware answer generation.",
    github:
      "https://github.com/Sagar-Bhawal/intelligent-document-assistant.git",
  },
];

const otherProjects = [
  {
    title: "Amazon Music Clustering using K-Means",
    description:
      "Clustered Amazon Music tracks using audio features such as danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo and duration.",
    tech: "Python • Pandas • Scikit-Learn • Streamlit",
    github:
      "https://github.com/Sagar-Bhawal/Amazon_Music_Clustering.git",
  },

  {
    title: "PhonePe Transaction Analysis Dashboard",
    description:
      "Built an ETL and analytics pipeline using PhonePe Pulse data, MySQL and Streamlit to analyze digital payments, user behavior, insurance adoption and market expansion across India.",
    tech: "Python • MySQL • Pandas • Streamlit • Plotly",
    github:
      "https://github.com/Sagar-Bhawal/phonepe-pulse-data-visualization.git",
  },
];

const gallery = [
  {
    title: "Luxury Housing Sales Analysis",
    image: "/projects/housing.png",
  },
  {
    title: "Content Monetization Modeler",
    image: "/projects/monetization.png",
  },
  {
    title: "Comment Toxicity Detection",
    image: "/projects/toxicity.png",
  },
  {
    title: "Intelligent Document Assistant",
    image: "/projects/rag.png",
  },
  {
    title: "Amazon Music Clustering",
    image: "/projects/amazon-music.png",
  },
  {
    title: "PhonePe Transaction Analysis",
    image: "/projects/phonepe.png",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentIndex = selectedImage
    ? gallery.findIndex((item) => item.image === selectedImage.image)
    : -1;

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      (currentIndex - 1 + gallery.length) % gallery.length;

    setSelectedImage(gallery[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      (currentIndex + 1) % gallery.length;

    setSelectedImage(gallery[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="projects"
        className="py-24 lg:py-28 bg-slate-950 text-white"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Selected Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              End-to-end projects demonstrating practical experience
              across analytics, machine learning, NLP and generative AI.
            </p>
          </div>

          {/* Featured */}
          <div className="grid lg:grid-cols-2 gap-6">

            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-sky-500/50 transition-all duration-300"
              >

                <div className="flex items-start justify-between gap-4 mb-5">

                  <span className="text-xs font-semibold tracking-widest text-sky-400">
                    0{index + 1}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-gray-500 hover:text-white transition"
                  >
                    <FaGithub size={21} />
                  </a>

                </div>

                <h3 className="text-2xl font-semibold text-white group-hover:text-sky-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-sky-400/90 mt-3">
                  {project.tech}
                </p>

                <p className="text-gray-400 leading-7 mt-5">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-gray-200 hover:text-sky-400 transition"
                >
                  View on GitHub
                  <span>→</span>
                </a>

              </article>
            ))}

          </div>

          {/* Other projects */}
          <div className="mt-20">

            <div className="mb-8">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2">
                More Work
              </p>

              <h3 className="text-3xl font-bold">
                Other Projects
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-sky-500/40 transition"
                >

                  <div className="flex justify-between items-start gap-4">

                    <h4 className="text-xl font-semibold text-white">
                      {project.title}
                    </h4>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-gray-500 hover:text-white transition"
                    >
                      <FaGithub size={20} />
                    </a>

                  </div>

                  <p className="text-sm text-sky-400 mt-3">
                    {project.tech}
                  </p>

                  <p className="text-gray-400 leading-7 mt-4">
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-5 text-sm text-gray-300 hover:text-sky-400 transition"
                  >
                    GitHub →
                  </a>

                </article>
              ))}

            </div>
          </div>

          {/* Gallery */}
          <div className="mt-24">

            <div className="text-center mb-10">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Visual Showcase
              </p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Project Demo Gallery
              </h3>

              <p className="text-gray-400 mt-4">
                Screenshots and visual previews from my projects.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {gallery.map((item) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group text-left bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/50 transition duration-300"
                >

                  <div className="relative overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block group-hover:scale-[1.02] transition duration-500"
                    />

                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition duration-300 flex items-center justify-center">
                      <FaExpand className="opacity-0 group-hover:opacity-100 text-white text-xl transition duration-300" />
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="font-medium text-gray-200">
                      {item.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Click to enlarge
                    </p>
                  </div>

                </button>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-white transition"
          >
            <FaTimes />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 z-20 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-white transition"
          >
            <FaChevronLeft />
          </button>

          <div
            className="relative max-w-6xl max-h-[92vh] overflow-auto rounded-xl"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="block w-auto max-w-full h-auto"
            />

          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 z-20 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-white transition"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-medium">
              {selectedImage.title}
            </p>

            <p className="text-gray-500 text-xs mt-1">
              {currentIndex + 1} / {gallery.length}
            </p>
          </div>

        </div>
      )}
    </>
  );
}