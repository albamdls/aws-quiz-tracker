import { useMemo, useState, useEffect } from "react";
import ModePicker from "../components/ModePicker";
import { CATEGORIES } from "../data/categories";
import { EXAMS } from "../data/globalTests";
import { Check } from "lucide-react"

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

const statusUI = {
    none: {
        card: "border-slate-800 bg-slate-900/50",
        badge: "bg-slate-800/70 text-slate-200 border-slate-700",
        label: "Sin intentos",
    },
    good: {
        card: "border-emerald-700/60 bg-emerald-500/10",
        badge: "bg-emerald-500/15 text-emerald-200 border-emerald-700/60",
        label: "Aprobado",
    },
    mid: {
        card: "border-amber-700/60 bg-amber-500/10",
        badge: "bg-amber-500/15 text-amber-200 border-amber-700/60",
        label: "Casi",
    },
    bad: {
        card: "border-red-700/60 bg-red-500/10",
        badge: "bg-red-500/15 text-red-200 border-red-700/60",
        label: "A reforzar",
    },
};

function Card({ className = "", children }) {
    return (
        <div
            className={[
                "rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur shadow-lg",
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
        <div className="relative min-h-screen">
            {/* ✅ Fondo azul/verde estilo portada */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-slate-950" />
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-emerald-600/25 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950 to-slate-950" />
            </div>


            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* ✅ Header tipo portada */}
                <div className="flex items-center justify-between mb-10">
                    <button
                        onClick={onBack}
                        className="text-slate-300 hover:text-white transition-colors"
                    >
                        ← Volver
                    </button>

                    <div className="text-center">
                        <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">AWS Quiz Tracker</span>{" "}
                            <span className="text-slate-400">·</span>{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                                jalando.code vibes
                            </span>
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-slate-400">Modalidad</p>
                        <p className="font-semibold text-white">
                            {modality === "global" ? "Global" : "Categorías"}
                        </p>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                        {pageTitle}
                    </h1>
                    <p className="text-slate-300">{subtitle}</p>
                </div>

                {/* ✅ GLOBAL */}
                {modality === "global" && (
                    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl shadow-lg p-6 mb-8 backdrop-blur">
                        <h2 className="text-xl font-bold text-white mb-4">Selecciona un test</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {EXAMS.map((exam, idx) => {
                                const examId = exam?.id ?? `exam-${idx}`;
                                const title = exam?.title ?? `Practice Exam ${idx + 1}`;

                                const { pct, status } = getExamStatusFromHistory(history, examId);

                                // ✅ IMPORTANTE: aquí estaba el bug (no existía statusStyles)
                                const statusStyles = {
                                    none: "border-slate-700/70 bg-slate-950/40",
                                    good: "border-emerald-500/50 bg-emerald-500/10",
                                    mid: "border-amber-500/50 bg-amber-500/10",
                                    bad: "border-red-500/50 bg-red-500/10",
                                };

                                const isSelected = String(selectedExamId) === String(examId);

                                return (
                                    <button
                                        key={examId}
                                        onClick={() => setSelectedExamId(examId)}
                                        className={[
                                            "p-5 rounded-2xl border text-left transition-all duration-300",
                                            "backdrop-blur hover:bg-slate-900/85",
                                            "ring-1 ring-slate-700/20 hover:border-slate-600",
                                            statusStyles[status],
                                            isSelected
                                                ? "ring-2 ring-cyan-400/40 border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.12)] bg-slate-900/75"
                                                : "",
                                        ].join(" ")}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {/* ✅ Tic cuando está seleccionado */}
                                                    <span
                                                        className={[
                                                            "inline-flex h-6 w-6 items-center justify-center rounded-lg border transition-all",
                                                            isSelected
                                                                ? "border-cyan-400/50 bg-cyan-500/15"
                                                                : "border-slate-700/60 bg-slate-950/40",
                                                        ].join(" ")}
                                                    >
                                                        <Check
                                                            className={[
                                                                "h-4 w-4 transition-opacity",
                                                                isSelected ? "opacity-100 text-cyan-200" : "opacity-0",
                                                            ].join(" ")}
                                                        />
                                                    </span>

                                                    <span className="text-white font-extrabold truncate">{title}</span>
                                                </div>

                                                <p className="text-sm text-slate-300">
                                                    {pct === null
                                                        ? "Sin intentos"
                                                        : status === "good"
                                                            ? "Aprobado"
                                                            : status === "mid"
                                                                ? "Casi"
                                                                : "A reforzar"}
                                                </p>
                                            </div>

                                            {pct !== null && (
                                                <span className="shrink-0 text-sm font-semibold text-slate-200">{pct}%</span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}


                {/* ✅ CATEGORY */}
                {modality === "category" && (
                    <Card className="p-6 mb-8">
                        <div className="flex items-end justify-between gap-4 mb-5">
                            <div>
                                <h2 className="text-xl font-bold text-white">Selecciona categorías</h2>
                                <p className="text-sm text-slate-300">
                                    Puedes elegir varias para mezclar preguntas.
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-slate-400">Seleccionadas</p>
                                <p className="text-sm font-semibold text-white">
                                    {selectedCategories.length}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categories.map((item) => {
                                const isSelected = selectedCategories.includes(item.id);

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => toggleCategory(item.id)}
                                        className={[
                                            "text-left rounded-2xl border p-5 transition-all duration-300",
                                            "ring-1",
                                            isSelected
                                                ? [
                                                    "border-emerald-400/70 ring-emerald-400/35",
                                                    "bg-gradient-to-br from-blue-500/10 to-emerald-500/10",
                                                    "shadow-[0_0_45px_rgba(16,185,129,0.14)]",
                                                ].join(" ")
                                                : "border-slate-800 bg-slate-950/35 ring-slate-700/20 hover:border-slate-700 hover:bg-slate-950/55",
                                        ].join(" ")}
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="font-bold text-white truncate">{item.name}</h3>
                                                {item.description && (
                                                    <p className="text-sm text-slate-300 mt-1">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            {isSelected && (
                                                <span className="text-xs px-2 py-1 rounded-lg border border-emerald-400/40 bg-emerald-500/10 text-emerald-200">
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
                <Card className="p-6">
                    <div className="flex items-end justify-between gap-4 mb-5">
                        <div>
                            <h2 className="text-xl font-bold text-white">Configura tu test</h2>
                            <p className="text-sm text-slate-300">
                                Elige modo y, si aplica, número de preguntas.
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-slate-400">Listo</p>
                            <p className={`text-sm font-semibold ${canStart ? "text-emerald-300" : "text-slate-400"}`}>
                                {canStart ? "Sí" : "No"}
                            </p>
                        </div>
                    </div>

                    {modality === "category" && (
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-200 mb-2">
                                Número de preguntas
                            </label>
                            <input
                                type="number"
                                min={1}
                                max={200}
                                value={numQuestions}
                                onChange={(e) => setNumQuestions(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-slate-800 bg-slate-950 text-white outline-none focus:ring-2 focus:ring-emerald-400/30 focus:border-emerald-400/40"
                            />
                        </div>
                    )}

                    <h3 className="text-lg font-bold text-white mb-4">Selecciona el modo</h3>
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
                            bg-gradient-to-r from-blue-500/90 to-emerald-600/90
                            backdrop-blur
                            border border-white/10
                            shadow-lg shadow-cyan-500/10
                            hover:text-white
                            hover:shadow-cyan-400/20
                            disabled:opacity-40
                            transition-all
                        "
                    >
                        Continuar
                    </button>
                </Card>
            </div>
        </div>
    );
}
