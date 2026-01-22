import { useEffect, useMemo } from "react";
import { Trophy, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
// import MapPage from "./Map"; // ⚠️ Manténlo comentado si todavía no lo estás usando

// Ajusta estos valores a tu proyecto real
const BRAND = "AWS Quiz Tracker";
const SITE_URL = "https://albamdls.github.io/aws-quiz-tracker/"; // <-- cámbialo si ya tienes dominio propio
const OG_IMAGE = `${SITE_URL}og/aws-quiz-tracker.png`; // <-- crea esta imagen o cambia la ruta
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
        () =>
            "AWS Cloud Practitioner Practice Tests (CLF-C02) | Simulacros, Modo Estudio y Progreso",
        []
    );

    const description = useMemo(
        () =>
            "Practica para AWS Certified Cloud Practitioner (CLF-C02) con tests interactivos: simulacros globales, modo estudio con corrección, minimapa y estadísticas. Gratis y fácil de usar.",
        []
    );

    const keywords = useMemo(
        () =>
            "AWS Cloud Practitioner, CLF-C02, practice tests, simulacro AWS, test AWS, preguntas AWS, examen AWS, AWS quiz, AWS practice exam, certificación AWS, jalando.code",
        []
    );

    // 🧠 SEO en SPA: inyectamos meta tags + JSON-LD en <head>
    useEffect(() => {
        // Title
        document.title = title;

        // Basic meta
        setMeta("description", description);
        setMeta("keywords", keywords);
        setMeta("robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
        setMeta("theme-color", "#020617"); // slate-950
        setMeta("application-name", BRAND);

        // Canonical (muy importante para evitar duplicados si cambias rutas)
        setLink("canonical", SITE_URL);

        // Open Graph
        setMeta("og:type", "website", true);
        setMeta("og:locale", LOCALE, true);
        setMeta("og:site_name", BRAND, true);
        setMeta("og:title", title, true);
        setMeta("og:description", description, true);
        setMeta("og:url", SITE_URL, true);
        setMeta("og:image", OG_IMAGE, true);

        // Twitter
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", title);
        setMeta("twitter:description", description);
        setMeta("twitter:image", OG_IMAGE);

        // JSON-LD: WebSite + Organization + SoftwareApplication
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
            sameAs: [
                "https://github.com/albamdls",
                // "https://www.linkedin.com/in/tu-perfil", // <-- opcional
                // "https://www.instagram.com/jalando.code", // <-- opcional
            ],
        });

        setJsonLd("software", {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: BRAND,
            operatingSystem: "Web",
            applicationCategory: "EducationalApplication",
            url: SITE_URL,
            description,
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
            },
            featureList: [
                "Simulacros globales",
                "Modo estudio con corrección",
                "Minimapa de preguntas",
                "Estadísticas y progreso",
            ],
        });
    }, [title, description, keywords]);

    return (
        <main className="relative min-h-screen overflow-hidden" aria-label="Landing page AWS Quiz Tracker">
            {/* Skip link (accesibilidad + UX) */}
            <a
                href="#contenido"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-slate-900 focus:text-white"
            >
                Saltar al contenido
            </a>

            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" aria-hidden="true">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-500 via-emerald-500 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950 to-slate-950" />
                <div className="absolute inset-0 bg-grid opacity-70" />
            </div>

            {/* HERO */}
            <header className="max-w-6xl mx-auto px-6 pt-24 pb-14 text-center" id="contenido">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-slate-700 bg-slate-900/70 text-sm text-slate-200 glow">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="font-medium">{BRAND}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-200">jalando.code vibes</span>
                </div>

                {/* H1 con keywords naturales */}
                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    AWS Cloud Practitioner{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        practice tests (CLF-C02)
                    </span>{" "}
                    con simulacros y modo estudio
                </h1>

                {/* Descripción con términos buscables + intención */}
                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
                    Una herramienta para <strong>practicar preguntas reales tipo examen</strong> de la certificación{" "}
                    <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> con una UX moderna:{" "}
                    <strong>simulacros</strong>, <strong>minimapa</strong>, <strong>banderas</strong> y{" "}
                    <strong>estadísticas</strong> para mejorar rápido.
                </p>

                {/* CTA principal */}
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={onGoDashboard}
                        className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-xl
              font-medium tracking-wide text-white/90
              bg-gradient-to-r from-blue-600 to-emerald-600
              border border-white/10
              shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20
              hover:text-white transition-all
            "
                        aria-label="Ir al Dashboard para empezar a practicar"
                    >
                        Empezar ahora
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>

                <p className="mt-4 text-sm text-slate-400">
                    Simulacros globales · categorías · modo examen / estudio · minimapa · progreso
                </p>

                {/* Enlaces internos (SEO/UX) */}
                <nav className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
                    <a href="#features" className="text-slate-300 hover:text-white underline underline-offset-4">
                        Ver características
                    </a>
                    <a href="#faq" className="text-slate-300 hover:text-white underline underline-offset-4">
                        FAQ
                    </a>
                    <a href="#seo" className="text-slate-300 hover:text-white underline underline-offset-4">
                        Sobre el examen CLF-C02
                    </a>
                </nav>
            </header>

            {/* FEATURES */}
            <section className="max-w-6xl mx-auto px-6 pb-16" id="features" aria-label="Características">
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

            {/* FAQ (texto indexable + long-tail keywords) */}
            <section className="max-w-6xl mx-auto px-6 pb-20" id="faq" aria-label="Preguntas frecuentes">
                <div className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        FAQ sobre AWS Cloud Practitioner practice tests
                    </h2>

                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <details className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                            <summary className="cursor-pointer font-semibold text-white">
                                ¿Esto sirve para preparar el examen AWS Cloud Practitioner (CLF-C02)?
                            </summary>
                            <p className="mt-2 text-slate-300">
                                Sí: está pensado para practicar con preguntas tipo examen, reforzar conceptos clave y
                                medir tu progreso. Ideal para combinar con la documentación oficial y tus apuntes.
                            </p>
                        </details>

                        <details className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                            <summary className="cursor-pointer font-semibold text-white">
                                ¿Qué diferencia hay entre modo examen y modo estudio?
                            </summary>
                            <p className="mt-2 text-slate-300">
                                En <strong>modo examen</strong> practicas con presión y sin feedback inmediato; en{" "}
                                <strong>modo estudio</strong> ves corrección y señales visuales para aprender rápido.
                            </p>
                        </details>

                        <details className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                            <summary className="cursor-pointer font-semibold text-white">
                                ¿Incluye preguntas por categorías (Security, Networking, Storage, etc.)?
                            </summary>
                            <p className="mt-2 text-slate-300">
                                Sí: puedes practicar por categorías para atacar tus puntos débiles y luego hacer simulacros completos.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* SEO TEXT (más útil, mejor estructurado y con keywords naturales) */}
            <section className="max-w-6xl mx-auto px-6 pb-24" id="seo" aria-label="Texto informativo para SEO">
                <div className="max-w-4xl text-left text-slate-300 leading-relaxed">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Practice tests para AWS Certified Cloud Practitioner (CLF-C02)
                    </h2>

                    <p className="mb-4">
                        <strong>{BRAND}</strong> es una herramienta online para practicar para la certificación{" "}
                        <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> con{" "}
                        <strong>tests interactivos</strong>. Está diseñada para ayudarte a mantener la constancia:
                        haces preguntas, revisas fallos, marcas dudas con banderas y ves tu progreso en un solo sitio.
                    </p>

                    <p className="mb-4">
                        Si estás buscando <strong>simulacros AWS Cloud Practitioner</strong> o un{" "}
                        <strong>AWS practice exam</strong> con buena experiencia de usuario, aquí puedes practicar
                        tanto en formato completo como por categorías (por ejemplo:{" "}
                        <strong>Security &amp; Identity</strong>, <strong>Networking</strong>, <strong>Storage</strong>{" "}
                        y <strong>Serverless</strong>).
                    </p>

                    <p>
                        El objetivo es simple: que entrenes con preguntas que se sienten “reales”, mejores tu criterio
                        en las respuestas y llegues al examen con confianza.
                    </p>

                    {/* CTA secundario (con anchor) */}
                    <div className="mt-8">
                        <button
                            onClick={onGoDashboard}
                            className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                font-medium text-white/90
                bg-slate-950 border border-slate-700
                hover:border-slate-500 hover:text-white transition
              "
                            aria-label="Ir al Dashboard para empezar el simulacro"
                        >
                            Ir al Dashboard
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

function Feature({ icon: Icon, title, text }) {
    return (
        <article
            className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-lg"
            aria-label={title}
        >
            <Icon className="w-8 h-8 text-emerald-400 mb-3" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-300 text-sm">{text}</p>
        </article>
    );
}
