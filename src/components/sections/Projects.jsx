const projects = [
  {
    title: "Cinex",
    repo: "https://github.com/BrunoBrasilJr/cinex.git",
    label: "Projeto principal",
    description:
      "Aplicação com foco em navegação simples, layout consistente e experiência de uso — do tipo que dá gosto de clicar.",
    tags: ["Front-end", "UI/UX", "Responsivo", "Componentização"],
    caseStudy: {
      problema:
        "Organizar uma interface com várias informações sem virar bagunça — mantendo leitura boa no desktop e no mobile.",
      decisao:
        "Priorizei hierarquia visual (títulos/contraste/espaçamento) e estrutura modular para manter o layout previsível e fácil de evoluir.",
      solucao:
        "Componentizei os blocos principais, refinei espaçamentos e padronizei estados visuais (hover/bordas) para deixar tudo consistente.",
      aprendizado:
        "Quando a UI é previsível, o usuário entende mais rápido e você também mantém o projeto melhor — UI boa não é detalhe, é produto.",
    },
  },
  {
    title: "Clairflow",
    repo: "https://github.com/BrunoBrasilJr/clairflow.git",
    label: "Projeto principal",
    description:
      "Projeto focado em interface limpa e apresentação clara do conteúdo, com decisões visuais que ajudam o usuário a não se perder.",
    tags: ["Front-end", "Experiência do usuário", "Organização", "Boas práticas"],
    caseStudy: {
      problema:
        "Transformar uma ideia em uma interface ‘direta ao ponto’, sem exagero visual e sem texto genérico.",
      decisao:
        "Segui uma abordagem de layout minimalista, com leitura forte (tipografia + espaçamento) e componentes com responsabilidade bem definida.",
      solucao:
        "Criei uma base visual consistente (bordas/contraste) e organizei a UI por prioridade — o usuário vê o que importa primeiro.",
      aprendizado:
        "Menos elementos não significa simples: significa que cada escolha precisa ser intencional e bem resolvida.",
    },
  },
];

function CaseItem({ title, text }) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-semibold text-zinc-200">{title}</p>
      <p className="text-sm text-zinc-400 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 text-zinc-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h3 className="text-blue-500 font-medium mb-4">Projetos</h3>

          <h2 className="text-3xl md:text-4xl font-bold">
            Cases curtos com decisões reais de produto
          </h2>

          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto leading-relaxed">
            Aqui eu não tento “encher linguiça” com tecnologia. Eu mostro{" "}
            <strong className="text-zinc-200">o problema</strong>,{" "}
            <strong className="text-zinc-200">as decisões</strong> e{" "}
            <strong className="text-zinc-200">o que eu aprendi</strong> construindo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="
                bg-zinc-800 hover:bg-zinc-700
                rounded-2xl p-6 flex flex-col justify-between
                transition-all duration-150 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
                border border-zinc-700 hover:border-blue-500
              "
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{p.label}</p>
                  </div>
                </div>

                <p className="text-zinc-300 mb-5 leading-relaxed">
                  {p.description}
                </p>

                <ul className="text-sm text-zinc-300 flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="bg-zinc-900/40 border border-zinc-700 px-3 py-1 rounded-md"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="grid gap-4">
                  <CaseItem title="Problema" text={p.caseStudy.problema} />
                  <CaseItem title="Decisão" text={p.caseStudy.decisao} />
                  <CaseItem title="Solução" text={p.caseStudy.solucao} />
                  <CaseItem title="Aprendizado" text={p.caseStudy.aprendizado} />
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-700 flex gap-6">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
