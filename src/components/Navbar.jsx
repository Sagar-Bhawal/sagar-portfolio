import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Journey", link: "#timeline" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        <a
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight"
        >
          Sagar<span className="text-sky-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-sky-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-xl text-gray-200 hover:text-sky-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-300">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-sky-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-sky-500 text-slate-950 font-semibold px-6 py-2.5 rounded-lg"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}