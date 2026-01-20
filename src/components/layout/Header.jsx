"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* NOME (ajustado pro mobile) */}
        <span
          className="
            font-bold text-zinc-100
            text-base sm:text-lg
            whitespace-nowrap
            max-w-140px sm:max-w-none
            truncate
          "
          title="Bruno Brasil"
        >
          Bruno Brasil
        </span>

        <ul className="flex gap-5 sm:gap-8">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
                  relative text-sm font-medium transition-colors
                  ${
                    active === section.id
                      ? "text-blue-500"
                      : "text-zinc-400 hover:text-zinc-200"
                  }
                `}
              >
                {section.label}

                {/* underline animada */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-2px bg-blue-500
                    transition-all duration-300
                    ${active === section.id ? "w-full" : "w-0"}
                  `}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
