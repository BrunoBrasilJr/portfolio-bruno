"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function About() {
  const revealRef = useRevealOnScroll();

  return (
    <section id="about" className="bg-zinc-950 text-zinc-100 py-24">
      <div
        ref={revealRef}
        className="
          max-w-6xl mx-auto px-6
          grid md:grid-cols-2 gap-12
          items-start
          fade-in-up
        "
      >
        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <h3 data-stagger="1" className="text-blue-500 font-medium mb-4">
            Sobre mim
          </h3>

          <h2 data-stagger="2" className="text-3xl md:text-4xl font-bold mb-6">
            Desenvolvedor Front-end com foco em UI e UX
          </h2>

          <p data-stagger="3" className="text-zinc-400 mb-4">
            Sou desenvolvedor front-end em formação, residente em Sorocaba – SP,
            com foco na criação de interfaces modernas, responsivas e
            acessíveis, sempre priorizando a experiência do usuário (UX) e a
            qualidade visual (UI). Busco transformar ideias em produtos digitais
            bem estruturados, funcionais e agradáveis de usar.
          </p>

          <p data-stagger="4" className="text-zinc-400 mb-4">
            Sou <strong>técnico em Desenvolvimento de Sistemas</strong> pela
            <strong> ETEC de Itu</strong> (2022 – 2024), onde adquiri uma base
            sólida em lógica de programação, desenvolvimento web e fundamentos
            de software.
          </p>

          <p data-stagger="5" className="text-zinc-400">
            Atualmente, curso{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> na{" "}
            <strong>FATEC de Itu</strong>, com conclusão prevista para{" "}
            <strong>2026</strong>, buscando evoluir constantemente minhas
            habilidades em front-end, boas práticas de desenvolvimento e design
            de interfaces.
          </p>
        </div>

        {/* FOTO */}
        <div
          data-stagger="6"
          className="flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div
            className="
              w-full max-w-xs sm:max-w-sm md:w-80
              aspect-4/5 md:aspect-3/4
              rounded-2xl overflow-hidden
              bg-zinc-800
            "
          >
            <img
              src="/portfolio-atualizado.png"
              alt="Harrington"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
