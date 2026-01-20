export default function Hero() {
  return (
    <section id="home" className="bg-zinc-900 text-zinc-100">
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16">
        <div className="max-w-4xl px-6 text-center">
          <p className="text-blue-500 font-medium mb-4 text-lg">Olá, eu sou</p>

          <h1 className="font-bold mb-6 text-5xl md:text-6xl">Bruno Brasil</h1>

          <h2 className="text-zinc-300 mb-5 text-2xl">
            Desenvolvedor Front-end focado em interfaces claras, organizadas e
            centradas no usuário
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Eu construo experiências web com atenção real a{" "}
            <strong className="text-zinc-200">hierarquia visual</strong>,{" "}
            <strong className="text-zinc-200">componentização</strong> e{" "}
            <strong className="text-zinc-200">detalhes de usabilidade</strong>.
            Meu objetivo é transformar uma ideia em uma interface simples,
            consistente e agradável de usar.
          </p>

          <a
            href="/Bruno Brasil - Desenvolvedor Front-end Júnior.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              border border-zinc-600
              hover:border-blue-400
              px-8 py-4
              rounded-lg
              font-medium
              text-lg
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            Ver currículo
          </a>
        </div>
      </div>
    </section>
  );
}
