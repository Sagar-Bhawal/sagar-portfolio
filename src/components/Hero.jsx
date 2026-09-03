import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 pt-24">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="max-w-3xl">

            <p className="text-sky-400 font-medium tracking-wide mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Sagar Bhawal
            </h1>

            <div className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
              <TypeAnimation
                sequence={[
                  "Data Scientist",
                  2000,
                  "Machine Learning Engineer",
                  2000,
                  "Generative AI Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-7 max-w-2xl text-gray-400 text-lg leading-8">
              Passionate about transforming data into actionable
              insights through Machine Learning, Deep Learning,
              NLP, Generative AI and Business Intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20"
              >
                View Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-sky-400 text-gray-200 hover:text-sky-400 px-6 py-3 rounded-lg transition-all duration-300"
              >
                Explore Projects
                <FaArrowDown className="text-sm" />
              </a>

            </div>

            <div className="flex items-center gap-5 mt-8">

              <a
                href="https://github.com/Sagar-Bhawal"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/sagar-bhawal-957638245/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                <FaLinkedin size={25} />
              </a>

            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl scale-110" />

              <img
                src="/profile.jpg"
                alt="Sagar Bhawal"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] object-cover rounded-full border border-sky-400/50 shadow-2xl shadow-sky-500/10"
              />

              <div className="absolute -bottom-4 -left-4 sm:left-0 bg-slate-900/95 border border-slate-700 rounded-xl px-5 py-4 shadow-xl">
                <p className="text-xs text-gray-400">
                  Focus
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Data • ML • AI
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}