import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">

        <div className="flex flex-col justify-center">

          <p className="text-sky-400 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-2">
            Sagar Bhawal
          </h1>

          <TypeAnimation
            sequence={[
              "Data Scientist",
              2000,
              "Machine Learning Engineer",
              2000,
              "Generative AI Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-sky-400 mt-4"
          />

          <p className="mt-6 text-gray-300 leading-8">
            Passionate about transforming data into actionable
            insights through Machine Learning, Deep Learning,
            NLP, Generative AI and Business Intelligence.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl"
            >
              Download Resume
            </a>

            <a href="https://github.com/Sagar-Bhawal">
              <FaGithub size={30} />
            </a>

            <a href="https://www.linkedin.com/in/sagar-bhawal-957638245/">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-sky-500"
          />
        </div>

      </div>
    </section>
  );
}