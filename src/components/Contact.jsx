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
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12">
          Interested in Data Science, Machine Learning,
          Analytics and AI.
        </p>

        <div className="space-y-6">

          {/* Email */}
          <a
            href="mailto:sagarbhawalsb32@gmail.com"
            className="flex justify-center items-center gap-3 text-lg hover:text-sky-400 transition"
          >
            <FaEnvelope />
            sagarbhawalsb32@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sagar-Bhawal"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-3 text-lg hover:text-sky-400 transition"
          >
            <FaGithub />
            github.com/Sagar-Bhawal
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sagar-bhawal-957638245"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-3 text-lg hover:text-sky-400 transition"
          >
            <FaLinkedin />
            linkedin.com/in/sagar-bhawal-957638245
          </a>

          {/* Location */}
          <div className="flex justify-center items-center gap-3 text-lg text-gray-300">
            <FaMapMarkerAlt />
            India
          </div>

        </div>
      </div>
    </section>
  );
}