const timeline = [
  {
    year: "2025 - Present",
    title: "Master Data Science Program with AI",
    desc: "IIT Madras | HCL-GUVI.",
  },
  {
    year: "2023 - 2025",
    title: "Bachelor of Education ",
    desc: "Tarai B.ed College, Ghoshpukur.",
  },
  {
    year: "2019 - 2022",
    title: "Bachelor of Arts",
    desc: "Salesian College, Siliguri.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 lg:py-28 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Learning & Building
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-slate-700" />

          <div className="space-y-10">

            {timeline.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative pl-10"
              >

                <div className="absolute left-0 top-1.5 w-[19px] h-[19px] rounded-full bg-sky-500 border-4 border-slate-900 shadow-lg shadow-sky-500/20" />

                <p className="text-sm font-semibold text-sky-400">
                  {item.year}
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mt-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 leading-7 max-w-2xl">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}