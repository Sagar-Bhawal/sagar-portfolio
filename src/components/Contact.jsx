import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-28 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-7">
            Interested in Data Science, Machine Learning,
            Analytics and AI? I'd be happy to connect.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 gap-5">

          <a
            href="mailto:sagarbhawalsb32@gmail.com"
            className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-sky-500/50 transition"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Email
              </p>

              <p className="text-gray-200 mt-1 break-all">
                sagarbhawalsb32@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Sagar-Bhawal"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-sky-500/50 transition"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center text-gray-200">
              <FaGithub />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                GitHub
              </p>

              <p className="text-gray-200 mt-1">
                Sagar-Bhawal
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sagar-bhawal-957638245/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-sky-500/50 transition"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
              <FaLinkedin />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                LinkedIn
              </p>

              <p className="text-gray-200 mt-1">
                Sagar Bhawal
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Location
              </p>

              <p className="text-gray-200 mt-1">
                India
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}