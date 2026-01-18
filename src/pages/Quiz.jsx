import { useEffect, useMemo, useState } from "react";
import { Clock } from "lucide-react";
import QuestionCard from "../components/QuestionCard";
import { isCorrectAnswer, isAnswered } from "../utils/scoring";
import formatTime from "../utils/time";

function isAnsweredValue(v) {
    // single: number (>=0)
    if (typeof v === "number") return v >= 0;

    // multi: array con al menos 1 selección
    if (Array.isArray(v)) return v.length > 0;

    return false;
}

export default function QuizPage({ questions, mode, onFinish, onExit }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(mode === "exam");

    useEffect(() => {
        let interval;
        if (running) interval = setInterval(() => setTimer((t) => t + 1), 1000);
        return () => clearInterval(interval);
    }, [running]);

    const currentQ = questions?.[current];

    const answeredCount = useMemo(() => {
        if (!Array.isArray(questions)) return 0;
        return questions.reduce((acc, q) => acc + (isAnsweredValue(answers[q.id]) ? 1 : 0), 0);
    }, [questions, answers]);

    const allAnswered = Array.isArray(questions) && answeredCount === questions.length;

    if (!Array.isArray(questions) || questions.length === 0 || !currentQ) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                    <p className="text-xl font-semibold text-white mb-2">No hay preguntas para mostrar</p>
                    <p className="text-slate-300 mb-6">
                        Parece que el test no devolvió preguntas (JSON vacío o mal formateado).
                    </p>
                    <button
                        onClick={onExit}
                        className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                    >
                        Volver
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Layout: contenido + minimapa */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                {/* MAIN */}
                <div>
                    {/* Header */}
                    <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl shadow-lg p-6 mb-6">
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <button onClick={onExit} className="text-slate-300 hover:text-white">
                                    ← Salir
                                </button>
                                <span className="text-sm font-semibold text-slate-300">
                                    Pregunta {current + 1} de {questions.length}
                                </span>

                                {/* contador respondidas */}
                                <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-slate-950 text-slate-200">
                                    Respondidas: <span className="text-white font-semibold">{answeredCount}</span>/{questions.length}
                                </span>
                            </div>

                            {mode === "exam" && (
                                <div className="flex items-center gap-2 text-red-300 font-semibold">
                                    <Clock className="w-5 h-5" />
                                    {formatTime(timer)}
                                </div>
                            )}
                        </div>

                        {/* Progress bar */}
                        <div className="mt-4 bg-slate-800 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all"
                                style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Question */}
                    <QuestionCard
                        question={currentQ}
                        selectedAnswer={answers[currentQ.id]}
                        mode={mode}
                        onAnswer={(val) => setAnswers({ ...answers, [currentQ.id]: val })}
                    />

                    {/* Nav */}
                    <div className="flex justify-between mt-6 gap-3">
                        <button
                            onClick={() => setCurrent((c) => c - 1)}
                            disabled={current === 0}
                            className="
                px-6 py-3 rounded-xl font-medium
                disabled:opacity-40
                bg-slate-900/70 backdrop-blur border border-slate-800
                text-slate-200 hover:text-white hover:border-slate-600 transition
              "
                        >
                            ← Anterior
                        </button>

                        {current === questions.length - 1 ? (
                            <button
                                onClick={() => {
                                    setRunning(false);
                                    onFinish(answers, timer);
                                }}
                                disabled={mode === "exam" && !allAnswered}
                                className="
                  px-8 py-3 rounded-xl font-medium tracking-wide
                  bg-gradient-to-r from-blue-600 to-emerald-600
                  text-white/90 hover:text-white
                  disabled:opacity-40
                  border border-white/10
                  shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20
                  transition-all
                "
                                title={mode === "exam" && !allAnswered ? "Te faltan preguntas por responder" : "Finalizar"}
                            >
                                Finalizar
                            </button>
                        ) : (
                            <button
                                onClick={() => setCurrent((c) => c + 1)}
                                className="
                  px-6 py-3 rounded-xl font-medium tracking-wide
                  bg-gradient-to-r from-blue-600 to-emerald-600
                  text-white/90 hover:text-white
                  border border-white/10
                  shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20
                  transition-all
                "
                            >
                                Siguiente →
                            </button>
                        )}
                    </div>
                </div>

                {/* MINIMAPA (Sidebar) */}
                <aside className="lg:sticky lg:top-6 h-fit">
                    <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl shadow-lg p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-bold">Minimapa</h3>
                            <span className="text-xs text-slate-300">
                                {answeredCount}/{questions.length}
                            </span>
                        </div>

                        {/* Leyenda */}
                        <div className="flex flex-wrap gap-2 text-xs text-slate-300 mb-4">
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-emerald-500/70 border border-emerald-500/60" />
                                Correcta
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-red-500/70 border border-red-500/60" />
                                Incorrecta
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-slate-950 border border-slate-700" />
                                En blanco
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-blue-500/70 border border-blue-500/70" />
                                Actual
                            </span>
                        </div>

                        {/* Grid botones */}
                        <div className="grid grid-cols-5 gap-2">
                            {questions.map((q, idx) => {
                                const answered = isAnsweredValue(answers[q.id]);
                                const isCurrent = idx === current;

                                // 👉 AQUÍ está la clave
                                const ok = answered ? isCorrectAnswer(q, answers[q.id]) : false;

                                const base =
                                    "w-full aspect-square rounded-lg text-sm font-semibold transition select-none";

                                const style = isCurrent
                                    ? "bg-blue-500/20 border border-blue-500/70 text-white"
                                    : answered
                                        ? mode === "study"
                                            ? ok
                                                ? "bg-emerald-500/15 border border-emerald-500/60 text-emerald-200 hover:bg-emerald-500/25"
                                                : "bg-red-500/15 border border-red-500/60 text-red-200 hover:bg-red-500/25"
                                            : "bg-emerald-500/15 border border-emerald-500/60 text-emerald-200 hover:bg-emerald-500/25"
                                        : "bg-slate-950 border border-slate-700 text-slate-300 hover:border-slate-500";

                                return (
                                    <button
                                        key={q.id ?? idx}
                                        onClick={() => setCurrent(idx)}
                                        className={[base, style].join(" ")}
                                        title={
                                            !answered
                                                ? "En blanco"
                                                : mode === "study"
                                                    ? ok
                                                        ? "Correcta"
                                                        : "Incorrecta"
                                                    : "Respondida"
                                        }
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}

                        </div>

                        {/* Acciones rápidas */}
                        <div className="mt-5 flex gap-2">
                            <button
                                onClick={() => {
                                    // ir a la primera en blanco
                                    const i = questions.findIndex((q) => !isAnsweredValue(answers[q.id]));
                                    if (i >= 0) setCurrent(i);
                                }}
                                className="
                  flex-1 py-2 rounded-xl text-sm font-medium
                  bg-slate-950 border border-slate-700 text-slate-200
                  hover:border-slate-500 hover:text-white transition
                "
                            >
                                Ir a pendientes
                            </button>
                        </div>
                    </div>

                    {/* En móvil, el sidebar ya cae debajo, pero queda bien.
              Si lo quieres sticky también en móvil, lo hacemos tipo barra horizontal. */}
                </aside>
            </div>
        </div>
    );
}
