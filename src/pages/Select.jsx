import { useMemo, useState, useEffect } from "react";
import ModePicker from "../components/ModePicker";
import { CATEGORIES } from "../data/categories";
import { EXAMS } from "../data/globalTests";
import { Check } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

function getExamStatusFromHistory(history = [], examId) {
    const attempts = history
        .filter((h) => h?.modality === "global" && String(h?.examId) === String(examId))
        .sort((a, b) => Date.parse(b?.date || 0) - Date.parse(a?.date || 0));

    if (attempts.length === 0) return { pct: null, status: "none" };

    const pct = Number(attempts[0]?.pct ?? null);
    if (Number.isNaN(pct) || pct === null) return { pct: null, status: "none" };

    if (pct >= 70) return { pct, status: "good" };
    if (pct >= 50) return { pct, status: "mid" };
    return { pct, status: "bad" };
}

// ✅ Status tokens adaptados a light/dark
const statusTokens = {
    none: {
        card: "border-slate-200 bg-white/55 dark:border-slate-800 dark:bg-slate-950/35",
        pill: "border-slate-200 bg-white/60 text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200",
        label: "Sin intentos",
    },
    good: {
        card: "border-emerald-300/70 bg-emerald-500/10 dark:border-emerald-700/60 dark:bg-emerald-500/10",
        pill: "border-emerald-300/60 bg-emerald-500/10 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-500/15 dark:text-emerald-200",
        label: "Aprobado",
    },
    mid: {
        card: "border-amber-300/70 bg-amber-500/10 dark:border-amber-700/60 dark:bg-amber-500/10",
        pill: "border-amber-300/60 bg-amber-500/10 text-amber-800 dark:border-amber-700/60 dark:bg-amber-500/15 dark:text-amber-200",
        label: "Casi",
    },
    bad: {
        card: "border-red-300/70 bg-red-500/10 dark:border-red-700/60 dark:bg-red-500/10",
        pill: "border-red-300/60 bg-red-500/10 text-red-800 dark:border-red-700/60 dark:bg-red-500/15 dark:text-red-200",
        label: "A reforzar",
    },
};

function Card({ className = "", children }) {
    return (
        <div
            className={[
                "rounded-2xl border backdrop-blur shadow-lg",
                "bg-white/70 border-slate-200/70 text-slate-900",
                "dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-100",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

export default function SelectPage({ modality, stats, onBack, onStart }) {
    const [mode, setMode] = useState(null);

    const [selectedExamId, setSelectedExamId] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [numQuestions, setNumQuestions] = useState(10);

    useEffect(() => {
        setMode(null);
        setSelectedExamId(null);
        setSelectedCategories([]);
        setNumQuestions(10);
    }, [modality]);

    const categories = useMemo(() => CATEGORIES, []);
    const history = stats?.history ?? [];

    function toggleCategory(id) {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    }

    // ✅ Para móvil: añadir una categoría desde un select
    function addCategory(id) {
        if (!id) return;
        setSelectedCategories((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }

    const pageTitle = modality === "global" ? "Tests Globales" : "Por Categorías";
    const subtitle =
        modality === "global"
            ? "Elige un test y luego el modo"
            : "Selecciona una o varias categorías, nº de preguntas y modo";

    const canStart =
        modality === "global"
            ? Boolean(selectedExamId) && Boolean(mode)
            : selectedCategories.length > 0 && Boolean(mode) && numQuestions > 0;

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            {/* ✅ Fondo FlickeringGrid + glows (mismo estilo que Landing / resto) */}
            <FlickeringGrid
                className="pointer-events-none fixed inset-0 z-0"
                squareSize={4}
                gridGap={6}
                maxOpacity={0.18}
                flickerChance={0.12}
                color="rgb(100,116,139)" // slate-500
            />

            {/* Velo para legibilidad */}
            <div className="pointer-events-none fixed inset-0 z-[1] bg-white/60 dark:bg-slate-950/45" />

            {/* Glows azul/verde */}
            <div
                className="pointer-events-none fixed inset-0 z-[2] overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/15 dark:bg-blue-600/25 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-emerald-600/15 dark:bg-emerald-600/25 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-slate-50 to-slate-50 dark:from-slate-950/20 dark:via-slate-950 dark:to-slate-950" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
                {/* ✅ Header responsive: 3 columnas, centro centrado de verdad */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-8 sm:mb-10">
                    <div className="justify-self-start">
                        <button
                            onClick={onBack}
                            className="text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
                        >
                            ← Volver
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            <span className="font-semibold text-slate-950 dark:text-white">
                                AWS Quiz Tracker
                            </span>{" "}
                            <span className="text-slate-400">·</span>{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent font-semibold">
                                jalando.code vibes
                            </span>
                        </p>
                    </div>

                    <div className="justify-self-end text-right">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Modalidad</p>
                        <p className="font-semibold text-slate-950 dark:text-white">
                            {modality === "global" ? "Global" : "Categorías"}
                        </p>
                    </div>
                </div>

                <div className="text-center mb-8 sm:mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-2">
                        {pageTitle}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>
                </div>

                {/* ✅ GLOBAL */}
                {modality === "global" && (
                    <Card className="p-5 sm:p-6 mb-6 sm:mb-8">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-4">
                            Selecciona un test
                        </h2>

                        {/* ✅ MÓVIL: dropdown */}
                        <div className="sm:hidden">
                            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                Elige un examen
                            </label>

                            <select
                                value={selectedExamId ?? ""}
                                onChange={(e) => setSelectedExamId(e.target.value)}
                                className="
                  w-full p-3 rounded-xl border outline-none
                  bg-white/70 border-slate-200 text-slate-900
                  focus:ring-2 focus:ring-cyan-400/25 focus:border-cyan-400/40
                  dark:bg-slate-950 dark:border-slate-800 dark:text-white
                  dark:focus:ring-2 dark:focus:ring-cyan-400/30 dark:focus:border-cyan-400/40
                "
                            >
                                <option value="" disabled>
                                    Selecciona un test…
                                </option>

                                {EXAMS.map((exam, idx) => {
                                    const examId = exam?.id ?? `exam-${idx}`;
                                    const title = exam?.title ?? `Exam ${idx + 1}`;
                                    const { pct, status } = getExamStatusFromHistory(history, examId);
                                    const t = statusTokens[status] ?? statusTokens.none;

                                    return (
                                        <option key={examId} value={String(examId)}>
                                            {title} {pct !== null ? `· ${pct}%` : `· ${t.label}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        {/* ✅ DESKTOP/TABLET: grid */}
                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                            {EXAMS.map((exam, idx) => {
                                const examId = exam?.id ?? `exam-${idx}`;
                                const title = exam?.title ?? `Exam ${idx + 1}`;

                                const { pct, status } = getExamStatusFromHistory(history, examId);
                                const isSelected = String(selectedExamId) === String(examId);
                                const t = statusTokens[status] ?? statusTokens.none;

                                return (
                                    <button
                                        key={examId}
                                        onClick={() => setSelectedExamId(examId)}
                                        className={[
                                            "p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300",
                                            "backdrop-blur",
                                            "ring-1 ring-slate-200/70 dark:ring-slate-700/20",
                                            "hover:shadow-[0_0_60px_rgba(34,211,238,0.10)]",
                                            "hover:border-slate-300 dark:hover:border-slate-700",
                                            t.card,
                                            isSelected
                                                ? "ring-2 ring-cyan-400/35 border-cyan-400/40 bg-white/70 dark:bg-slate-900/75"
                                                : "",
                                        ].join(" ")}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span
                                                        className={[
                                                            "inline-flex h-6 w-6 items-center justify-center rounded-lg border transition-all shrink-0",
                                                            isSelected
                                                                ? "border-cyan-400/50 bg-cyan-500/10"
                                                                : "border-slate-200 bg-white/60 dark:border-slate-700 dark:bg-slate-950/40",
                                                        ].join(" ")}
                                                    >
                                                        <Check
                                                            className={[
                                                                "h-4 w-4 transition-opacity",
                                                                isSelected
                                                                    ? "opacity-100 text-cyan-700 dark:text-cyan-200"
                                                                    : "opacity-0",
                                                            ].join(" ")}
                                                        />
                                                    </span>

                                                    <span className="text-slate-950 dark:text-white font-extrabold truncate">
                                                        {title}
                                                    </span>
                                                </div>

                                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                                    {t.label}
                                                </p>
                                            </div>

                                            {pct !== null && (
                                                <span className="shrink-0 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                    {pct}%
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </Card>
                )}

                {/* ✅ CATEGORY */}
                {modality === "category" && (
                    <Card className="p-5 sm:p-6 mb-6 sm:mb-8">
                        <div className="flex items-end justify-between gap-4 mb-5">
                            <div>
                                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                                    Selecciona categorías
                                </h2>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Puedes elegir varias para mezclar preguntas.
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Seleccionadas
                                </p>
                                <p className="text-sm font-semibold text-slate-950 dark:text-white">
                                    {selectedCategories.length}
                                </p>
                            </div>
                        </div>

                        {/* ✅ MÓVIL: dropdown + chips */}
                        <div className="sm:hidden">
                            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                Añade una categoría
                            </label>

                            <select
                                value=""
                                onChange={(e) => addCategory(e.target.value)}
                                className="
                  w-full p-3 rounded-xl border outline-none
                  bg-white/70 border-slate-200 text-slate-900
                  focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400/40
                  dark:bg-slate-950 dark:border-slate-800 dark:text-white
                  dark:focus:ring-2 dark:focus:ring-emerald-400/30 dark:focus:border-emerald-400/40
                "
                            >
                                <option value="" disabled>
                                    Selecciona categoría…
                                </option>

                                {categories
                                    .filter((c) => !selectedCategories.includes(c.id))
                                    .map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {c.name}
                                        </option>
                                    ))}
                            </select>

                            {selectedCategories.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {selectedCategories.map((id) => {
                                        const cat = categories.find((c) => c.id === id);
                                        const label = cat?.name || id;

                                        return (
                                            <button
                                                key={id}
                                                type="button"
                                                onClick={() => toggleCategory(id)}
                                                className="
                          inline-flex items-center gap-2 px-3 py-2 rounded-xl
                          border border-emerald-400/40 bg-emerald-500/10
                          text-emerald-800 dark:text-emerald-200
                          transition-colors
                        "
                                            >
                                                <span className="font-semibold text-sm">{label}</span>
                                                <span className="text-base leading-none opacity-80">×</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {selectedCategories.length === 0 && (
                                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                                    No has seleccionado ninguna todavía.
                                </p>
                            )}
                        </div>

                        {/* ✅ DESKTOP/TABLET: grid */}
                        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {categories.map((item) => {
                                const isSelected = selectedCategories.includes(item.id);

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => toggleCategory(item.id)}
                                        className={[
                                            "text-left rounded-2xl border p-4 sm:p-5 transition-all duration-300",
                                            "ring-1",
                                            isSelected
                                                ? [
                                                    "border-emerald-400/60 ring-emerald-400/30",
                                                    "bg-gradient-to-br from-blue-500/10 to-emerald-500/10",
                                                    "shadow-[0_0_45px_rgba(16,185,129,0.12)]",
                                                ].join(" ")
                                                : [
                                                    "border-slate-200 ring-slate-200/70 bg-white/55 hover:bg-white/70 hover:border-slate-300",
                                                    "dark:border-slate-800 dark:ring-slate-700/20 dark:bg-slate-950/30 dark:hover:bg-slate-950/45 dark:hover:border-slate-700",
                                                ].join(" "),
                                        ].join(" ")}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="font-bold text-slate-950 dark:text-white truncate">
                                                    {item.name}
                                                </h3>
                                                {item.description && (
                                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            {isSelected && (
                                                <span className="text-xs px-2 py-1 rounded-lg border border-emerald-400/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200">
                                                    ✓
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </Card>
                )}

                {/* ✅ Config */}
                <Card className="p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4 mb-5">
                        <div>
                            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                                Configura tu test
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Elige modo y, si aplica, número de preguntas.
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Listo</p>
                            <p
                                className={`text-sm font-semibold ${canStart
                                        ? "text-emerald-600 dark:text-emerald-300"
                                        : "text-slate-500 dark:text-slate-400"
                                    }`}
                            >
                                {canStart ? "Sí" : "No"}
                            </p>
                        </div>
                    </div>

                    {modality === "category" && (
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                Número de preguntas
                            </label>
                            <input
                                type="number"
                                min={1}
                                max={200}
                                value={numQuestions}
                                onChange={(e) => setNumQuestions(Number(e.target.value))}
                                className="
                  w-full p-3 rounded-xl border outline-none
                  bg-white/70 border-slate-200 text-slate-900
                  focus:ring-2 focus:ring-emerald-400/25 focus:border-emerald-400/40
                  dark:bg-slate-950 dark:border-slate-800 dark:text-white
                  dark:focus:ring-2 dark:focus:ring-emerald-400/30 dark:focus:border-emerald-400/40
                "
                            />
                        </div>
                    )}

                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-4">
                        Selecciona el modo
                    </h3>

                    <ModePicker value={mode} onSelect={(m) => setMode(m)} />

                    <button
                        disabled={!canStart}
                        onClick={() => {
                            if (modality === "global") {
                                onStart("global", selectedExamId, mode, null);
                            } else {
                                onStart("category", selectedCategories, mode, numQuestions);
                            }
                        }}
                        className="
              mt-6 w-full py-4 rounded-xl
              font-medium tracking-wide
              text-white/90
              bg-gradient-to-r from-blue-600/95 to-emerald-600/95
              backdrop-blur
              border border-white/10
              shadow-lg shadow-cyan-500/10
              hover:text-white hover:shadow-cyan-400/20
              disabled:opacity-40
              transition-all
            "
                    >
                        Continuar
                    </button>
                </Card>
            </div>
        </main>
    );
}
