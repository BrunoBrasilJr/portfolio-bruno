export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-zinc-100 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-blue-500 font-medium mb-4">Contato</h3>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vamos conversar?
        </h2>

        <p className="text-zinc-400 mb-10">
          Estou aberto a oportunidades como desenvolvedor front-end estágio ou
          júnior. Se quiser trocar uma ideia, é só me chamar.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=brasilbruno39@gmail.com&su=Vim%20pelo%20portfólio&body=Olá,%20vim%20pelo%20seu%20portfólio."
            target="_blank"
            className="
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            Enviar email
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/bruno-brasil-2474263a3/"
            target="_blank"
            className="
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/BrunoBrasilJr"
            target="_blank"
            className="
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            GitHub
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5511974248137?text=Olá,%20vim%20pelo%20seu%20portfólio."
            target="_blank"
            className="
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
