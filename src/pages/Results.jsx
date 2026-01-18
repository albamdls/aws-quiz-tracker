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

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-800">
                <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mb-4">
                        <Trophy className="w-16 h-16 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">¡Test Completado!</h2>
                    {mode === "exam" && (
                        <p className="text-slate-300">Tiempo: {formatTime(timer)}</p>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-950 rounded-xl p-6 text-center border border-slate-800">
                        <p className="text-slate-300 mb-2">Total</p>
                        <p className="text-4xl font-bold text-blue-400">{questions.length}</p>
                    </div>
                    <div className="bg-slate-950 rounded-xl p-6 text-center border border-slate-800">
                        <p className="text-slate-300 mb-2">Correctas</p>
                        <p className="text-4xl font-bold text-emerald-400">{score.correct}</p>
                    </div>
                    <div className="bg-slate-950 rounded-xl p-6 text-center border border-slate-800">
                        <p className="text-slate-300 mb-2">Puntuación</p>
                        <p className="text-4xl font-bold text-white">{score.percentage}%</p>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold">Resumen</h3>

                    {questions.map((q, i) => {
                        const userAns = answers?.[q.id];
                        const ok = isCorrectAnswer(q, userAns);

                        const userText = indicesToText(q.options, userAns);
                        const correctText = indicesToText(q.options, q.correct);

                        return (
                            <div
                                key={q.id}
                                className={`p-4 rounded-xl border ${ok
                                    ? "border-emerald-700 bg-emerald-500/10"
                                    : "border-red-700 bg-red-500/10"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    {ok ? (
                                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                                    ) : (
                                        <XCircle className="w-6 h-6 text-red-400" />
                                    )}

                                    <div className="flex-1">
                                        <p className="font-semibold mb-2">
                                            {i + 1}. {q.question}
                                        </p>

                                        <p className="text-sm text-slate-300">
                                            Tu respuesta: <span className="text-white">{userText}</span>
                                        </p>

                                        {!ok && (
                                            <p className="text-sm text-slate-300">
                                                Correcta: <span className="text-white">{correctText}</span>
                                            </p>
                                        )}

                                        {q.explanation && (
                                            <p className="text-sm text-slate-200 italic mt-2">
                                                {q.explanation}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={onExit}
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg"
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}
