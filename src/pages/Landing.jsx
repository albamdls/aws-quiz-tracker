import { useEffect, useMemo } from "react";
import { Trophy, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const BRAND = "AWS Quiz Tracker";
const SITE_URL = "https://albamdls.github.io/aws-quiz-tracker/";
const OG_IMAGE = `${SITE_URL}og/aws-quiz-tracker.png`;
const LOCALE = "es_ES";

function setMeta(nameOrProp, value, isProperty = false) {
    if (!value) return;
    const attr = isProperty ? "property" : "name";
    let el = document.head.querySelector(`meta[${attr}="${nameOrProp}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
    }
    el.setAttribute("content", value);
}

function setLink(rel, href) {
    if (!href) return;
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

function setJsonLd(id, json) {
    const scriptId = `jsonld-${id}`;
    let el = document.getElementById(scriptId);
    if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = scriptId;
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(json);
}

export default function LandingPage({ onGoDashboard }) {
    const title = useMemo(
        () => "AWS Cloud Practitioner Practice Tests (CLF-C02) | Simulacros, Modo Estudio y Progreso",
        []
    );

    const description = useMemo(
        () =>
            "Practica para AWS Certified Cloud Practitioner (CLF-C02) con tests interactivos: simulacros globales, modo estudio con corrección, minimapa y estadísticas. Gratis y fácil de usar.",
        []
    );

    const keywords = useMemo(
        () =>
            "AWS Cloud Practitioner, CLF-C02, practice tests, simulacro AWS, test AWS, preguntas AWS, examen AWS, AWS quiz, AWS Exam, certificación AWS, jalando.code",
        []
    );

    useEffect(() => {
        document.title = title;

        // ✅ Theme-color dinámico según .dark en <html>
        const isDark = document.documentElement.classList.contains("dark");
        setMeta("theme-color", isDark ? "#020617" : "#f8fafc"); // slate-950 / slate-50

        setMeta("description", description);
        setMeta("keywords", keywords);
        setMeta("robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
        setMeta("application-name", BRAND);

        setLink("canonical", SITE_URL);

        setMeta("og:type", "website", true);
        setMeta("og:locale", LOCALE, true);
        setMeta("og:site_name", BRAND, true);
        setMeta("og:title", title, true);
        setMeta("og:description", description, true);
        setMeta("og:url", SITE_URL, true);
        setMeta("og:image", OG_IMAGE, true);

        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", title);
        setMeta("twitter:description", description);
        setMeta("twitter:image", OG_IMAGE);

        setJsonLd("website", {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: BRAND,
            url: SITE_URL,
            inLanguage: "es-ES",
            description,
        });

        setJsonLd("organization", {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "jalando.code",
            url: SITE_URL,
            sameAs: ["https://github.com/albamdls"],
        });

        setJsonLd("software", {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: BRAND,
            operatingSystem: "Web",
            applicationCategory: "EducationalApplication",
            url: SITE_URL,
            description,
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            featureList: [
                "Simulacros globales",
                "Modo estudio con corrección",
                "Minimapa de preguntas",
                "Estadísticas y progreso",
            ],
        });
    }, [title, description, keywords]);

    return (
        <main
            className="
        relative min-h-screen overflow-hidden
        bg-slate-50 text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
            aria-label="Landing page AWS Quiz Tracker"
        >
            {/* Skip link */}
            <a
                href="#contenido"
                className="
          sr-only focus:not-sr-only
          focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:rounded-lg
          focus:bg-white focus:text-slate-900
          dark:focus:bg-slate-900 dark:focus:text-white
          border border-slate-200 dark:border-slate-700
          shadow
        "
            >
                Saltar al contenido
            </a>

            {/* FlickeringGrid GLOBAL */}
            <FlickeringGrid
                className="pointer-events-none fixed inset-0 z-0"
                squareSize={4}
                gridGap={6}
                maxOpacity={0.35}
                flickerChance={0.12}
                color="rgb(100,116,139)" // slate-500
            />

            {/* ✅ Velo para legibilidad (light/dark) */}
            {/* <div className="pointer-events-none absolute inset-0 z-[1] bg-white/65 dark:bg-slate-950/45" /> */}

            {/* ✅ Glow animado por encima del grid y del velo (pero debajo del contenido) */}
            {/* ✅ Glow animado (oculto en móvil) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2] hidden sm:block">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full blur-3xl opacity-25 dark:opacity-25 bg-gradient-to-br from-blue-500 via-emerald-500 to-slate-900 breathing-glow" />
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full blur-3xl opacity-20 dark:opacity-20 bg-gradient-to-tr from-sky-400 via-emerald-400 to-blue-600 breathing-glow2" />
            </div>

            <div className="relative z-10">
                {/* HERO */}
                <section className="relative overflow-hidden" id="contenido">
                    {/* ✅ AJUSTE: menos padding top en móvil */}
                    <header className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-24 pb-12 sm:pb-14 text-center">
                        <div
                            className="
                inline-flex items-center gap-2
                px-4 py-1 rounded-full
                border border-slate-200/70 dark:border-slate-700
                bg-white/60 dark:bg-slate-900/60
                text-sm
                text-slate-700 dark:text-slate-200
                card-glass glow
              "
                        >
                            <span
                                className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                                aria-hidden="true"
                            />
                            <span className="font-medium">{BRAND}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-600 dark:text-slate-200">jalando.code vibes</span>
                        </div>

                        {/* ✅ AJUSTE: menos margin-top en móvil */}
                        <h1 className="mt-4 sm:mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                            AWS Cloud Practitioner{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                                practice tests (CLF-C02)
                            </span>{" "}
                            con simulacros y modo estudio
                        </h1>

                        {/* ✅ AJUSTE: párrafo un pelín más compacto en móvil */}
                        <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Una herramienta para <strong>practicar preguntas reales tipo examen</strong> de la certificación{" "}
                            <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> con una UX moderna:{" "}
                            <strong>simulacros</strong>, <strong>minimapa</strong>, <strong>banderas</strong> y{" "}
                            <strong>estadísticas</strong> para mejorar rápido.
                        </p>

                        {/* CTA principal */}
                        <div className="mt-8 sm:mt-10 flex justify-center">
                            <button
                                onClick={onGoDashboard}
                                className="
                  inline-flex items-center gap-2
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl
                  font-medium tracking-wide
                  text-white
                  bg-gradient-to-r from-blue-600 to-emerald-600
                  border border-white/10
                  shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20
                  hover:brightness-[1.03]
                  transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40
                "
                                aria-label="Ir al Dashboard para empezar a practicar"
                            >
                                Empezar ahora
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>

                        {/* ✅ AJUSTE: menos espacio bajo CTA en móvil */}
                        <p className="mt-3 sm:mt-4 text-sm text-slate-500 dark:text-slate-400">
                            Simulacros globales · categorías · modo examen / estudio · minimapa · progreso
                        </p>

                        {/* ✅ AJUSTE: menos margin-top para nav en móvil */}
                        <nav className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 text-sm">
                            <a
                                href="#features"
                                className="text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white underline underline-offset-4"
                            >
                                Ver características
                            </a>
                            <a
                                href="#faq"
                                className="text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white underline underline-offset-4"
                            >
                                FAQ
                            </a>
                            <a
                                href="#seo"
                                className="text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white underline underline-offset-4"
                            >
                                Sobre el examen CLF-C02
                            </a>
                        </nav>
                    </header>
                </section>

                {/* FEATURES */}
                <section
                    className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-16"
                    id="features"
                    aria-label="Características"
                >
                    <div className="grid md:grid-cols-3 gap-6">
                        <Feature
                            icon={Trophy}
                            title="Simulacros globales"
                            text="Elige el examen y practica con el formato que te prepara para el día real: ritmo, presión y estructura."
                        />
                        <Feature
                            icon={CheckCircle}
                            title="Modo estudio con corrección"
                            text="Feedback visual inmediato para entender por qué aciertas o fallas y aprender mientras practicas."
                        />
                        <Feature
                            icon={BarChart3}
                            title="Progreso y estadísticas"
                            text="Seguimiento real para detectar puntos débiles por categorías y mejorar con constancia."
                        />
                    </div>
                </section>

                {/* FAQ */}
                <section
                    className="max-w-6xl mx-auto px-4 sm:px-6 pb-18 sm:pb-20"
                    id="faq"
                    aria-label="Preguntas frecuentes"
                >
                    <div
                        className="
              rounded-2xl p-6 sm:p-8
              border border-slate-200/80 dark:border-slate-800
              bg-white/90 dark:bg-slate-900/70
              backdrop-blur
              shadow-xl shadow-slate-900/5 dark:shadow-black/20
            "
                    >
                        <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                            FAQ sobre AWS Cloud Practitioner practice tests
                        </h2>

                        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                            <details
                                className="
                  rounded-xl p-4
                  border border-slate-200/80 dark:border-slate-800
                  bg-white dark:bg-slate-950/40
                  shadow-sm
                "
                            >
                                <summary className="cursor-pointer font-semibold text-slate-950 dark:text-white">
                                    ¿Esto sirve para preparar el examen AWS Cloud Practitioner (CLF-C02)?
                                </summary>
                                <p className="mt-2 text-slate-700 dark:text-slate-300">
                                    Sí: está pensado para practicar con preguntas tipo examen, reforzar conceptos clave y medir tu
                                    progreso. Ideal para combinar con la documentación oficial y tus apuntes.
                                </p>
                            </details>

                            <details
                                className="
                  rounded-xl p-4
                  border border-slate-200/80 dark:border-slate-800
                  bg-white dark:bg-slate-950/40
                  shadow-sm
                "
                            >
                                <summary className="cursor-pointer font-semibold text-slate-950 dark:text-white">
                                    ¿Qué diferencia hay entre modo examen y modo estudio?
                                </summary>
                                <p className="mt-2 text-slate-700 dark:text-slate-300">
                                    En <strong>modo examen</strong> practicas con presión y sin feedback inmediato; en{" "}
                                    <strong>modo estudio</strong> ves corrección y señales visuales para aprender rápido.
                                </p>
                            </details>

                            <details
                                className="
                  rounded-xl p-4
                  border border-slate-200/80 dark:border-slate-800
                  bg-white dark:bg-slate-950/40
                  shadow-sm
                "
                            >
                                <summary className="cursor-pointer font-semibold text-slate-950 dark:text-white">
                                    ¿Incluye preguntas por categorías (Security, Networking, Storage, etc.)?
                                </summary>
                                <p className="mt-2 text-slate-700 dark:text-slate-300">
                                    Sí: puedes practicar por categorías para atacar tus puntos débiles y luego hacer simulacros
                                    completos.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* SEO TEXT */}
                <section
                    className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24"
                    id="seo"
                    aria-label="Texto informativo para SEO"
                >
                    <div
                        className="
              rounded-2xl p-6 sm:p-8
              border border-slate-200/80 dark:border-slate-800
              bg-white/90 dark:bg-slate-900/70
              backdrop-blur
              shadow-xl shadow-slate-900/5 dark:shadow-black/20
            "
                    >
                        <div className="text-left text-slate-700 dark:text-slate-300 leading-relaxed">
                            <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                                Practice tests para AWS Certified Cloud Practitioner (CLF-C02)
                            </h2>

                            <p className="mb-4">
                                <strong>{BRAND}</strong> es una herramienta online para practicar para la certificación{" "}
                                <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> con <strong>tests interactivos</strong>.
                                Está diseñada para ayudarte a mantener la constancia: haces preguntas, revisas fallos, marcas dudas
                                con banderas y ves tu progreso en un solo sitio.
                            </p>

                            <p className="mb-4">
                                Si estás buscando <strong>simulacros AWS Cloud Practitioner</strong> o un <strong>AWS Exam</strong>{" "}
                                con buena experiencia de usuario, aquí puedes practicar tanto en formato completo como por
                                categorías (por ejemplo: <strong>Security &amp; Identity</strong>, <strong>Networking</strong>,{" "}
                                <strong>Storage</strong> y <strong>Serverless</strong>).
                            </p>

                            <p>
                                El objetivo es simple: que entrenes con preguntas que se sienten “reales”, mejores tu criterio en
                                las respuestas y llegues al examen con confianza.
                            </p>

                            <div className="mt-8">
                                <button
                                    onClick={onGoDashboard}
                                    className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    font-medium tracking-wide
                    text-white
                    bg-gradient-to-r from-blue-600 to-emerald-600
                    border border-white/10
                    shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20
                    hover:brightness-[1.03]
                    transition-all
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40
                  "
                                    aria-label="Ir al Dashboard para empezar el simulacro"
                                >
                                    Ir al Dashboard
                                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function Feature({ icon: Icon, title, text }) {
    return (
        <article
            className="
        rounded-2xl p-6 shadow-lg
        border border-slate-200/70 dark:border-slate-800
        bg-white/60 dark:bg-slate-900/60
        backdrop-blur
      "
            aria-label={title}
        >
            <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" aria-hidden="true" />
            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">{title}</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm">{text}</p>
        </article>
    );
}
