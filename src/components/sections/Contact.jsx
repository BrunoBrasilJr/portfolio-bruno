export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-zinc-100 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-blue-500 font-medium mb-4">Contato</h3>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Quer ver o código ou conversar sobre algum projeto?
        </h2>

        <p className="text-zinc-400 mb-10 leading-relaxed">
          Se você curtiu a forma como eu penso UI/UX e organização de interface,
          eu vou gostar de trocar uma ideia — seja sobre vaga, projeto ou
          melhoria.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=brasilbruno39@gmail.com&su=Vim%20pelo%20portfólio&body=Olá,%20vim%20pelo%20seu%20portfólio."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            <IconMail />
            <span>Enviar email</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/bruno-brasil-2474263a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            <IconLinkedIn />
            <span>LinkedIn</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/BrunoBrasilJr"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            <IconGitHub />
            <span>GitHub</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5511974248137?text=Olá,%20vim%20pelo%20seu%20portfólio."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              border border-zinc-700 hover:border-blue-500
              px-8 py-3 rounded-lg font-medium
              transition-all duration-150 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
            "
          >
            <IconWhatsApp />
            <span>WhatsApp</span>
          </a>
        </div>

        <p className="text-zinc-500 mt-10 text-sm leading-relaxed">
          Prefere olhar primeiro? Sem problema — o código está no GitHub e os
          projetos estão descritos como cases pra você entender minhas decisões.
        </p>
      </div>
    </section>
  );
}

function BaseIcon({ children }) {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 text-zinc-200"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function IconMail() {
  return (
    <BaseIcon>
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20 4H4a2 2 0 0 0-2 2v.3l10 6.25L22 6.3V6a2 2 0 0 0-2-2Zm2 4.56-9.47 5.92a1 1 0 0 1-1.06 0L2 8.56V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.56Z" />
      </svg>
    </BaseIcon>
  );
}

function IconLinkedIn() {
  return (
    <BaseIcon>
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        {/* “badge” quadradinho + in (fica perfeito em qualquer tamanho) */}
        <path d="M4 3.5h16A2.5 2.5 0 0 1 22.5 6v12A2.5 2.5 0 0 1 20 20.5H4A2.5 2.5 0 0 1 1.5 18V6A2.5 2.5 0 0 1 4 3.5Z" />
        <path
          d="M7.2 10.2h1.9V17H7.2v-6.8Zm.95-3.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM11 10.2h1.8v.9h.02c.25-.45.9-1.02 2.02-1.02 2.17 0 2.57 1.43 2.57 3.28V17h-1.9v-3.12c0-.75-.01-1.72-1.05-1.72-1.05 0-1.21.82-1.21 1.67V17H11v-6.8Z"
          fill="#0b0b0b"
        />
      </svg>
    </BaseIcon>
  );
}

function IconGitHub() {
  return (
    <BaseIcon>
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 .5A11.5 11.5 0 0 0 8.36 23c.58.1.8-.26.8-.57v-2.05c-3.25.72-3.93-1.57-3.93-1.57-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.22 1.79 1.22 1.04 1.8 2.74 1.28 3.41.98.1-.76.4-1.28.72-1.57-2.6-.3-5.33-1.32-5.33-5.86 0-1.3.46-2.36 1.21-3.2-.12-.3-.52-1.5.12-3.13 0 0 .99-.32 3.25 1.22a11.2 11.2 0 0 1 5.92 0c2.26-1.54 3.25-1.22 3.25-1.22.64 1.63.24 2.83.12 3.13.75.84 1.21 1.9 1.21 3.2 0 4.55-2.73 5.56-5.34 5.86.41.36.78 1.08.78 2.18v3.24c0 .31.21.67.81.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    </BaseIcon>
  );
}

function IconWhatsApp() {
  return (
    <BaseIcon>
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.76.46 3.49 1.33 5.01L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.48 0 9.94-4.46 9.94-9.94C22 6.46 17.54 2 12.04 2Zm5.77 14.25c-.24.68-1.2 1.26-1.95 1.42-.5.1-1.15.17-3.75-.8-3.32-1.24-5.46-4.31-5.62-4.53-.16-.22-1.35-1.8-1.35-3.43 0-1.62.84-2.42 1.14-2.75.3-.32.66-.4.88-.4.22 0 .44 0 .64.01.2.01.47-.08.73.56.27.64.92 2.22 1 2.38.08.16.13.35.02.56-.1.22-.15.35-.3.54-.15.19-.31.42-.44.56-.15.16-.31.33-.13.65.18.32.8 1.31 1.71 2.12 1.18 1.05 2.17 1.37 2.49 1.52.32.16.5.13.68-.08.18-.22.78-.91.99-1.22.2-.31.41-.26.68-.16.27.1 1.73.82 2.02.97.3.16.5.24.58.37.08.13.08.74-.16 1.42Z" />
      </svg>
    </BaseIcon>
  );
}
