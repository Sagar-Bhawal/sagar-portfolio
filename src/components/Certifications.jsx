export default function Certifications() {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-sky-400">
              Master Data Science Program
            </h3>

            <p className="text-gray-400 mt-3">
              GUVI - HCL
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-sky-400">
              ChatGPT for Everyone
            </h3>

            <p className="text-gray-400 mt-3">
              GUVI
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}