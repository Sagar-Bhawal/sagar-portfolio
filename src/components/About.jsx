```jsx
export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-4xl mx-auto">

          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
            Building practical solutions with data.
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-9 text-gray-300">

            <p>
              I’m an aspiring Data Scientist who builds end-to-end data and AI
              solutions to turn complex data into actionable insights,
              predictions, and intelligent applications.
            </p>

            <p>
              Through 6+ projects, I’ve worked with{" "}
              <span className="text-white font-semibold">100K+ records</span>{" "}
              across business analytics, predictive modeling, NLP, deep
              learning, clustering, and Generative AI. My work includes
              uncovering patterns in housing and digital payment data,
              predicting content monetization with{" "}
              <span className="text-white font-semibold">R² ≈ 0.95</span>,
              detecting toxic language, discovering patterns in music data,
              and building a{" "}
              <span className="text-sky-400 font-semibold">
                RAG-powered document assistant
              </span>{" "}
              for natural-language information retrieval.
            </p>

            <p>
              What I bring is a problem-first approach: understand the
              objective, work with the data, apply the right analytical or
              modeling technique, validate the result, and turn it into
              something usable. My goal is to build data-driven solutions that
              are technically sound, interpretable, and relevant to real-world
              problems.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
```
