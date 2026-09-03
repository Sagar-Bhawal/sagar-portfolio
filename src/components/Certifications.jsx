const certifications = [
  {
    title: "Master Data Science Program",
    issuer: "HCL - GUVI",
    link:
      "https://drive.google.com/file/d/1-Mm3kf9WOxJF-IkNqNjdX8uVNs_u7pPP/view?usp=drive_link",
    verified: true,
  },

  {
    title: "ChatGPT for Everyone",
    issuer: "GUVI",
    link:
      "https://drive.google.com/file/d/1z3APL_IbuZJAFP0nOP-kZRIWHOPuzPr5/view?usp=drive_link",
    verified: true,
  },

  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    link:
      "https://drive.google.com/file/d/1l4di1eH18SES8v1wcCQZF9nWUK3Qx2Jv/view?usp=drive_link",
    verified: true,
  },

  {
    title: "Professional Workshop",
    issuer: "Be10X",
    link:
      "https://drive.google.com/file/d/1ZtLoX2zjv7_iowiSxn-4_q0qXtKg_KoU/view?usp=drive_link",
    verified: true,
  },
];

export default function Certifications() {
  return (
    <section className="py-24 lg:py-28 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Credentials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Certifications and professional learning supporting my
            Data Science journey.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-sky-500/40 transition duration-300"
            >

              <div className="flex items-start justify-between gap-5">

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {certificate.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {certificate.issuer}
                  </p>
                </div>

                <span className="text-2xl">
                  📜
                </span>

              </div>

              {certificate.verified ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
                >
                  View Certificate →
                </a>
              ) : (
                <span className="inline-block mt-6 text-sm text-gray-500">
                  Certificate details available on request
                </span>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}