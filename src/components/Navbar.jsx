import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Timeline", link: "#timeline" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md text-white z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-wide text-sky-400"
        >
          Sagar Bhawal
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-sky-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-xl font-medium transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-sky-400"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-sky-500 px-5 py-2 rounded-xl"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}