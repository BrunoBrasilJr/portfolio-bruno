"use client";

export default function CurriculoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative z-50 w-[90%] max-w-4xl h-[85vh] bg-zinc-900 rounded-2xl overflow-hidden">
        <iframe
          src="/BrunoBrasil-Curriculo-FrontEnd.pdf"
          className="w-full h-full"
        />

        <div className="absolute top-4 right-4 flex gap-3">
          <a
            href="/BrunoBrasil-Curriculo-FrontEnd.pdf"
            download
            className="
              border border-zinc-600
              hover:border-zinc-400
              transition-colors
              px-4 py-2
              rounded-lg
              text-sm
            "
          >
            Baixar
          </a>

          <button
            onClick={onClose}
            className="
              border border-zinc-600
              hover:border-zinc-400
              transition-colors
              px-4 py-2
              rounded-lg
              text-sm
            "
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
