export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 text-zinc-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h3 className="text-blue-500 font-medium mb-4">Projetos</h3>

          <h2 className="text-3xl md:text-4xl font-bold">
            Alguns trabalhos que desenvolvi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PROJETO PRINCIPAL */}
          <div
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
                Aplicação front-end para cadastro e organização de filmes e
                séries, focada em lógica de aplicação, UX e componentização.
              </p>

              <ul className="text-sm text-zinc-400 flex flex-wrap gap-3 mb-6">
                <li className="bg-zinc-700 px-3 py-1 rounded-md">Next.js</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">JavaScript</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/BrunoBrasilJr/cinex.git"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Ver projeto
              </a>
            </div>
          </div>

          {/* PROJETO SECUNDÁRIO */}
          <div
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
                Consumo de API (Cats)
              </h3>

              <p className="text-zinc-400 mb-4">
                Projeto front-end consumindo API pública, com foco em
                organização de componentes, requisições e experiência do
                usuário.
              </p>

              <ul className="text-sm text-zinc-400 flex flex-wrap gap-3 mb-6">
                <li className="bg-zinc-700 px-3 py-1 rounded-md">React</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">API REST</li>
                <li className="bg-zinc-700 px-3 py-1 rounded-md">JavaScript</li>
              </ul>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/BrunoBrasilJr/api-cats.git"
                target="_blank"
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
