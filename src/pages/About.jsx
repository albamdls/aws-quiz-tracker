export default function AboutPage({ onBack }) {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-900 dark:text-slate-200">
      {/* 🔵🟢 Glows locales (encima del FlickeringGrid global) */}
      {/* <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-3xl" />
        <div className="absolute -top-56 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-500/15 dark:bg-sky-500/20 blur-3xl" />
        <div className="absolute top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl" />
      </div> */}

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-sky-500/25 to-emerald-500/25 border border-slate-200/60 dark:border-slate-800 backdrop-blur flex items-center justify-center">
              <span className="text-slate-900 dark:text-white font-bold">A</span>
            </div>

            <div className="leading-tight min-w-0">
              <p className="font-semibold text-slate-900 dark:text-slate-200 truncate">
                AWS Quiz Tracker{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  · jalando.code vibes
                </span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                About / Legal
              </p>
            </div>
          </div>

          {onBack && (
            <button
              onClick={onBack}
              className="
                w-full sm:w-auto
                px-4 py-2 rounded-xl
                border border-slate-200/70 dark:border-slate-800
                bg-white/70 dark:bg-slate-950/60
                backdrop-blur
                hover:bg-white dark:hover:bg-slate-900/50
                transition
                text-slate-800 dark:text-slate-200
              "
            >
              ← Volver
            </button>
          )}
        </div>

        {/* Title */}
        <div className="mb-7 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About / Legal
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Información del proyecto, atribuciones y aviso legal.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6">
          {/* ABOUT */}
          <section className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 backdrop-blur p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
              Sobre el proyecto
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>AWS Quiz Tracker</strong> es una aplicación educativa creada por{" "}
              <strong>Alba Mora</strong> como herramienta de práctica para la certificación{" "}
              <strong>AWS Cloud Practitioner</strong>.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              Su finalidad es ayudar a estudiantes y profesionales a reforzar conocimientos
              mediante simulacros, estadísticas de progreso y diferentes modos de aprendizaje.
            </p>
          </section>

          {/* QUESTIONS SOURCE */}
          <section className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 backdrop-blur p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
              Origen de las preguntas
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              El contenido se ha obtenido con fines{" "}
              <strong>educativos</strong> a partir del sitio{" "}
              <a
                href="https://kananinirav.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 underline underline-offset-4"
              >
                kananinirav.com
              </a>.
            </p>

            <div className="mt-4 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 p-4">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Atribución:</strong> los derechos pertenecen a sus autores. Para cambios o retirada,
                contacta vía{" "}
                <a
                  href="https://albamdls.github.io/portfolio-albamora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 dark:text-emerald-400 underline underline-offset-4"
                >
                  albamora.dev
                </a>.
              </p>
            </div>
          </section>

          {/* DISCLAIMER */}
          <section className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 backdrop-blur p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
              Aviso legal
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Este proyecto <strong>no está afiliado ni aprobado por AWS</strong>.
              AWS es una marca registrada de Amazon.com, Inc.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
              La información se proporciona con fines educativos y puede contener errores.
            </p>
          </section>

          {/* CREDITS */}
          <section className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 backdrop-blur p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
              Créditos
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-slate-700 dark:text-slate-300">
                Made with ❤️ by{" "}
                <a
                  href="https://albamdls.github.io/portfolio-albamora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 dark:text-emerald-400 underline underline-offset-4"
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
