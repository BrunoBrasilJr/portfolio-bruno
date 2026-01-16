"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function Projects() {
  const revealRef = useRevealOnScroll();

  return (
    <section id="projects" className="bg-zinc-900 text-zinc-100 py-24">
      <div ref={revealRef} className="max-w-6xl mx-auto px-6 fade-in-up">
        <div className="mb-16 text-center">
          <h3 data-stagger="1" className="text-blue-500 font-medium mb-4">
            Projetos
          </h3>

          <h2 data-stagger="2" className="text-3xl md:text-4xl font-bold">
            Alguns trabalhos que desenvolvi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Projeto 1 - ClaireFlow */}
          <div
            data-stagger="3"
            className="
              bg-zinc-800 hover:bg-zinc-700
              rounded-2xl p-6 flex flex-col justify-between
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
              border border-zinc-700 hover:border-blue-500
            "
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ClairFlow - Lading Page
              </h3>

              <p className="text-zinc-400 mb-4">
                Aplicação front-end com foco em organização de fluxo,
                componentização e experiência do usuário, utilizando React e
                boas práticas de desenvolvimento.
              </p>

              <ul className="text-sm text-zinc-400 flex flex-wrap gap-3 mb-6">
                <li className="bg-zinc-700 px-3 py-1 rounded-md">React</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">JavaScript</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">HTML</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">CSS</li>
              </ul>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/BrunoBrasilJr/clairflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver projeto
              </a>
            </div>
          </div>

          {/* Projeto 2 - Cadastro de Filmes & Séries */}
          <div
            data-stagger="4"
            className="
              bg-zinc-800 hover:bg-zinc-700
              rounded-2xl p-6 flex flex-col justify-between
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
              border border-zinc-700 hover:border-blue-500
            "
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Cadastro de Filmes & Séries
              </h3>

              <p className="text-zinc-400 mb-4">
                Aplicação front-end para cadastrar e organizar filmes e séries,
                com foco em responsividade, UX e organização de componentes.
              </p>

              <ul className="text-sm text-zinc-400 flex flex-wrap gap-3 mb-6">
                <li className="bg-zinc-700 px-3 py-1 rounded-md">Next.js</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">React</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">Tailwind</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">
                  LocalStorage
                </li>
              </ul>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/BrunoBrasilJr/cadastro-filmes-series"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
