export default function Resume() {
  return (
    <section className="py-24 bg-slate-900 text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Resume
        </h2>

        <p className="text-gray-400 mt-5">
          Download my latest resume to explore my
          skills, projects and certifications.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-sky-500 hover:bg-sky-600 px-8 py-3 rounded-xl"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
}