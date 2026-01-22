import { Trophy, CheckCircle, XCircle } from "lucide-react";
import formatTime from "../utils/time";
import { calculate, isCorrectAnswer } from "../utils/scoring";

function toArray(v) {
    if (v == null) return [];
    return Array.isArray(v) ? v : [v];
}

function indicesToText(options = [], indices = []) {
    const arr = toArray(indices)
        .map((x) => Number(x))
        .filter((x) => Number.isFinite(x));
    const labels = arr.map((idx) => options?.[idx]).filter(Boolean);
    return labels.length ? labels.join(" | ") : "-";
}

export default function ResultsPage({ questions, answers, timer, mode, onExit }) {
    const score = calculate(questions, answers);

    // UI helpers (light/dark)
    const pageBg =
        "min-h-[calc(100vh-4rem)] px-3 sm:px-4 py-6 sm:py-8"; // un pelín más compacto en móvil
    const card =
        "rounded-2xl border backdrop-blur shadow-lg p-5 sm:p-8 " +
        "bg-white/70 border-slate-200/70 text-slate-900 " +
        "dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-100";

    const subText = "text-slate-600 dark:text-slate-300";
    const subtle = "text-slate-500 dark:text-slate-400";

    return (
        <div className={pageBg}>
            <div className="max-w-4xl mx-auto">
                <div className={card}>
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mb-4 border border-white/10 shadow-lg shadow-cyan-500/10">
                            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-950 dark:text-white">
                            ¡Test Completado!
                        </h2>

                        {mode === "exam" && (
                            <p className={subText}>
                                Tiempo: <span className="font-semibold">{formatTime(timer)}</span>
                            </p>
                        )}
                    </div>

                    {/* KPI cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        <div
                            className="
                rounded-xl p-5 text-center border
                bg-white/60 border-slate-200
                dark:bg-slate-950/40 dark:border-slate-800
              "
                        >
                            <p className={subText + " mb-2"}>Total</p>
                            <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                                {questions.length}
                            </p>
                        </div>

                        <div
                            className="
                rounded-xl p-5 text-center border
                bg-white/60 border-slate-200
                dark:bg-slate-950/40 dark:border-slate-800
              "
                        >
                            <p className={subText + " mb-2"}>Correctas</p>
                            <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                                {score.correct}
                            </p>
                        </div>

                        <div
                            className="
                rounded-xl p-5 text-center border
                bg-white/60 border-slate-200
                dark:bg-slate-950/40 dark:border-slate-800
              "
                        >
                            <p className={subText + " mb-2"}>Puntuación</p>
                            <p className="text-4xl font-extrabold text-slate-950 dark:text-white">
                                {score.percentage}%
                            </p>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-end justify-between gap-3">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                                Resumen
                            </h3>

                            <span className={"text-xs sm:text-sm " + subtle}>
                                {score.correct}/{questions.length}
                            </span>
                        </div>

                        {questions.map((q, i) => {
                            const userAns = answers?.[q.id];
                            const ok = isCorrectAnswer(q, userAns);

                            const userText = indicesToText(q.options, userAns);
                            const correctText = indicesToText(q.options, q.correct);

                            return (
                                <div
                                    key={q.id}
                                    className={[
                                        "p-4 sm:p-5 rounded-xl border transition-colors",
                                        ok
                                            ? "border-emerald-300/60 bg-emerald-500/10 dark:border-emerald-700/60 dark:bg-emerald-500/10"
                                            : "border-red-300/60 bg-red-500/10 dark:border-red-700/60 dark:bg-red-500/10",
                                    ].join(" ")}
                                >
                                    <div className="flex items-start gap-3">
                                        {ok ? (
                                            <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                                        ) : (
                                            <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5" />
                                        )}

                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold mb-2 text-slate-950 dark:text-white">
                                                {i + 1}. {q.question}
                                            </p>

                                            <p className={"text-sm " + subText}>
                                                Tu respuesta:{" "}
                                                <span className="font-semibold text-slate-950 dark:text-white">
                                                    {userText}
                                                </span>
                                            </p>

                                            {!ok && (
                                                <p className={"text-sm " + subText}>
                                                    Correcta:{" "}
                                                    <span className="font-semibold text-slate-950 dark:text-white">
                                                        {correctText}
                                                    </span>
                                                </p>
                                            )}

                                            {q.explanation && (
                                                <p className="text-sm mt-2 italic text-slate-700 dark:text-slate-200">
                                                    {q.explanation}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={onExit}
                        className="
              w-full py-4 rounded-xl font-bold
              bg-gradient-to-r from-blue-600 to-emerald-600
              text-white/95 hover:text-white
              border border-white/10
              shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20
              transition-all
            "
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
    );
}
