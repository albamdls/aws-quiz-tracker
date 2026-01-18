export default function AboutPage({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden">
      {/* ✅ Background glow (azul/verde) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -top-56 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        {/* ✅ Top bar / header like Home */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500/30 to-emerald-500/30 border border-slate-800 backdrop-blur flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>

            <div className="leading-tight">
              <p className="text-slate-200 font-semibold">
                AWS Quiz Tracker{" "}
                <span className="text-emerald-400 font-medium">· jalando.code vibes</span>
              </p>
              <p className="text-xs text-slate-400">About / Legal</p>
            </div>
          </div>

          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-950/60 backdrop-blur hover:bg-slate-900/50 transition text-slate-200"
            >
              ← Volver
            </button>
          )}
        </div>

        {/* ✅ Page title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">About / Legal</h1>
          <p className="mt-3 text-slate-300 leading-relaxed max-w-3xl">
            Información del proyecto, atribuciones y aviso legal.
          </p>
        </div>

        {/* ✅ Cards */}
        <div className="grid gap-6">
          {/* ABOUT */}
          <section className="rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur p-6">
            <h2 className="text-2xl font-semibold mb-3">Sobre el proyecto</h2>

            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">AWS Quiz Tracker</span>{" "}
              es una aplicación educativa creada por{" "}
              <span className="font-semibold text-white">Alba Mora</span> como herramienta
              de práctica para la certificación{" "}
              <span className="font-semibold text-white">AWS Cloud Practitioner</span>.
            </p>

            <p className="text-slate-300 leading-relaxed mt-3">
              Su finalidad es ayudar a estudiantes y profesionales a reforzar conocimientos
              mediante simulacros, estadísticas de progreso y diferentes modos de aprendizaje.
            </p>
          </section>

          {/* QUESTIONS SOURCE */}
          <section className="rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur p-6">
            <h2 className="text-2xl font-semibold mb-3">Origen de las preguntas</h2>

            <p className="text-slate-300 leading-relaxed">
              El contenido de práctica incluido en esta aplicación se ha obtenido con fines{" "}
              <span className="font-semibold text-white">educativos</span> a partir del sitio{" "}
              <a
                href="https://kananinirav.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                kananinirav.com
              </a>
              .
            </p>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-slate-200 font-medium">Atribución:</span> todos los derechos
                sobre las preguntas pertenecen a sus respectivos autores. Si eres el titular
                de derechos y deseas solicitar cambios o retirada de contenido, ponte en contacto a
                través de{" "}
                <a
                  href="https://albamora.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  albamora.dev
                </a>
                .
              </p>
            </div>
          </section>

          {/* DISCLAIMER */}
          <section className="rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur p-6">
            <h2 className="text-2xl font-semibold mb-3">Aviso legal</h2>

            <p className="text-slate-300 leading-relaxed">
              Este proyecto{" "}
              <span className="font-semibold text-white">
                no está afiliado, patrocinado ni aprobado por Amazon Web Services (AWS)
              </span>
              . AWS y los servicios relacionados son marcas registradas de{" "}
              <span className="font-semibold text-white">Amazon.com, Inc.</span>
            </p>

            <p className="text-slate-300 leading-relaxed mt-3">
              La información mostrada tiene fines educativos y puede contener errores u omisiones.
              No constituye asesoramiento profesional.
            </p>
          </section>

          {/* CREDITS */}
          <section className="rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur p-6">
            <h2 className="text-2xl font-semibold mb-3">Créditos</h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-slate-300">
                Made with <span aria-hidden="true">❤️</span>{" "}
                <span className="sr-only">love</span> by{" "}
                <a
                  href="https://albamora.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  jalando.code / Alba Mora
                </a>
              </p>

              <span className="text-sm text-slate-500">
                © {new Date().getFullYear()} AWS Quiz Tracker
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
