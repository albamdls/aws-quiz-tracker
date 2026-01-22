import { useEffect, useMemo, useState } from "react";
import { Clock, Flag } from "lucide-react";
import QuestionCard from "../components/QuestionCard";
import { isCorrectAnswer } from "../utils/scoring";
import formatTime from "../utils/time";

function isAnsweredValue(v) {
    if (typeof v === "number") return v >= 0;
    if (Array.isArray(v)) return v.length > 0;
    return false;
}

export default function QuizPage({ questions, mode, onFinish, onExit }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(mode === "exam");

    // ✅ flags (banderas) por pregunta
    const [flags, setFlags] = useState(() => ({}));

    useEffect(() => {
        let interval;
        if (running) interval = setInterval(() => setTimer((t) => t + 1), 1000);
        return () => clearInterval(interval);
    }, [running]);

    const currentQ = questions?.[current];

    // Helpers flags
    const isFlagged = (id) => !!flags[id];
    const toggleFlag = (id) => setFlags((prev) => ({ ...prev, [id]: !prev[id] }));

    const flaggedCount = useMemo(() => {
        if (!Array.isArray(questions)) return 0;
        return questions.reduce((acc, q) => acc + (flags[q.id] ? 1 : 0), 0);
    }, [questions, flags]);

    const answeredCount = useMemo(() => {
        if (!Array.isArray(questions)) return 0;
        return questions.reduce((acc, q) => acc + (isAnsweredValue(answers[q.id]) ? 1 : 0), 0);
    }, [questions, answers]);

    const allAnswered = Array.isArray(questions) && answeredCount === questions.length;

    const goToNextFlagged = () => {
        if (!Array.isArray(questions) || questions.length === 0) return;
        const n = questions.length;
        for (let step = 1; step <= n; step++) {
            const idx = (current + step) % n;
            const q = questions[idx];
            if (q?.id != null && isFlagged(q.id)) {
                setCurrent(idx);
                return;
            }
        }
    };

    if (!Array.isArray(questions) || questions.length === 0 || !currentQ) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="rounded-2xl p-8 text-center border bg-white/70 border-slate-200/70 text-slate-900 dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-100 backdrop-blur shadow-lg shadow-black/5 dark:shadow-black/30">
                    <p className="text-xl font-semibold mb-2">No hay preguntas para mostrar</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
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
        // ✅ IMPORTANTE: NO bloqueamos el alto del viewport ni el scroll global (para que se vea el footer)
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-6">
            {/* Layout: contenido + minimapa (desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-3 sm:gap-6">
                {/* MAIN */}
                <div className="min-w-0">
                    {/* Header (sticky + compacto en móvil) */}
                    <div
                        className="
              sticky top-0 z-20
              rounded-2xl shadow-lg
              p-3 sm:p-6
              mb-3 sm:mb-6
              backdrop-blur border
              bg-white/80 border-slate-200/70
              dark:bg-slate-900/80 dark:border-slate-800
            "
                    >
                        <div className="flex flex-col gap-2 sm:gap-4">
                            {/* ✅ FILA SUPERIOR: siempre en una línea */}
                            <div className="flex items-center justify-between gap-3">
                                {/* Left group */}
                                <div className="min-w-0 flex items-center gap-2 sm:gap-4">
                                    <button
                                        onClick={onExit}
                                        className="shrink-0 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition"
                                    >
                                        ← Salir
                                    </button>

                                    <span className="min-w-0 text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
                                        Pregunta {current + 1} de {questions.length}
                                    </span>

                                    {/* ✅ OCULTO EN MÓVIL */}
                                    <span className="hidden sm:inline-flex text-xs px-3 py-1 rounded-full border bg-white/60 border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-white/10 dark:text-slate-200">
                                        Respondidas:{" "}
                                        <span className="text-slate-950 dark:text-white font-semibold">{answeredCount}</span>/
                                        {questions.length}
                                    </span>

                                    {/* ✅ OCULTO EN MÓVIL */}
                                    <span className="hidden sm:inline-flex text-xs px-3 py-1 rounded-full border bg-white/60 border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-white/10 dark:text-slate-200">
                                        Marcadas:{" "}
                                        <span className="text-slate-950 dark:text-white font-semibold">{flaggedCount}</span>
                                    </span>
                                </div>

                                {/* Right group */}
                                <div className="shrink-0 flex items-center gap-2 sm:gap-3">
                                    {mode === "exam" && (
                                        <div className="flex items-center gap-2 text-red-600 dark:text-red-300 font-semibold">
                                            <Clock className="w-5 h-5" />
                                            <span>{formatTime(timer)}</span>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => toggleFlag(currentQ.id)}
                                        className="
                      inline-flex items-center gap-2 px-3 py-2 rounded-xl
                      border transition
                      bg-white/60 border-slate-200 text-slate-800 hover:text-slate-950 hover:border-slate-300
                      dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:text-white dark:hover:border-slate-500
                    "
                                        title={isFlagged(currentQ.id) ? "Quitar bandera" : "Marcar para revisar"}
                                    >
                                        <Flag
                                            className={[
                                                "w-5 h-5",
                                                isFlagged(currentQ.id) ? "text-amber-500 dark:text-amber-300" : "text-slate-400",
                                            ].join(" ")}
                                        />
                                        <span className="text-sm font-medium">Marcar</span>
                                    </button>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-1">
                                <div className="bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all"
                                        style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Question */}
                    <QuestionCard
                        question={currentQ}
                        selectedAnswer={answers[currentQ.id]}
                        mode={mode}
                        onAnswer={(val) => setAnswers({ ...answers, [currentQ.id]: val })}
                    />

                    {/* ✅ Minimapa móvil (debajo de la pregunta) */}
                    <div className="lg:hidden mt-3">
                        <div className="rounded-2xl shadow-lg p-3 backdrop-blur border bg-white/70 border-slate-200/70 dark:bg-slate-900/70 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-slate-950 dark:text-white font-bold text-sm">Preguntas</h3>
                                <span className="text-xs text-slate-600 dark:text-slate-300">
                                    {answeredCount}/{questions.length}
                                </span>
                            </div>

                            <div className="overflow-x-auto">
                                <div className="flex gap-2 min-w-max pb-1">
                                    {questions.map((q, idx) => {
                                        const answered = isAnsweredValue(answers[q.id]);
                                        const isCurrent = idx === current;
                                        const flagged = isFlagged(q.id);
                                        const ok = answered ? isCorrectAnswer(q, answers[q.id]) : false;

                                        const base =
                                            "relative flex items-center justify-center w-9 h-9 rounded-xl text-xs font-semibold transition select-none";

                                        const style = isCurrent
                                            ? "bg-blue-500/20 border border-blue-500/70 text-slate-950 dark:text-white"
                                            : answered
                                                ? mode === "study"
                                                    ? ok
                                                        ? "bg-emerald-500/15 border border-emerald-500/60 text-emerald-700 dark:text-emerald-200"
                                                        : "bg-red-500/15 border border-red-500/60 text-red-700 dark:text-red-200"
                                                    : "bg-emerald-500/15 border border-emerald-500/60 text-emerald-700 dark:text-emerald-200"
                                                : "bg-white border border-slate-200 text-slate-600 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300";

                                        return (
                                            <button
                                                key={q.id ?? idx}
                                                onClick={() => setCurrent(idx)}
                                                className={[base, style].join(" ")}
                                                title={`Pregunta ${idx + 1}`}
                                            >
                                                {idx + 1}
                                                {flagged && (
                                                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-2 flex gap-2">
                                <button
                                    onClick={() => {
                                        const i = questions.findIndex((q) => !isAnsweredValue(answers[q.id]));
                                        if (i >= 0) setCurrent(i);
                                    }}
                                    className="
                    flex-1 py-2 rounded-xl text-xs font-medium
                    border transition
                    bg-white/60 border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-950
                    dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white
                  "
                                >
                                    Pendientes
                                </button>

                                <button
                                    onClick={() => {
                                        const i = questions.findIndex((q) => isFlagged(q.id));
                                        if (i >= 0) setCurrent(i);
                                    }}
                                    disabled={flaggedCount === 0}
                                    className="
                    flex-1 py-2 rounded-xl text-xs font-medium
                    border transition
                    bg-white/60 border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-950
                    dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white
                    disabled:opacity-40
                  "
                                >
                                    Marcadas
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="flex justify-between mt-4 sm:mt-6 gap-3">
                        <button
                            onClick={() => setCurrent((c) => c - 1)}
                            disabled={current === 0}
                            className="
                px-4 sm:px-6 py-3 rounded-xl font-medium
                disabled:opacity-40
                backdrop-blur border transition
                bg-white/70 border-slate-200 text-slate-800 hover:text-slate-950 hover:border-slate-300
                dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-200 dark:hover:text-white dark:hover:border-slate-600
              "
                        >
                            ← Anterior
                        </button>

                        {current === questions.length - 1 ? (
                            <button
                                onClick={() => {
                                    setRunning(false);
                                    onFinish(answers, timer, flags);
                                }}
                                disabled={mode === "exam" && !allAnswered}
                                className="
                  px-6 sm:px-8 py-3 rounded-xl font-medium tracking-wide
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
                  px-5 sm:px-6 py-3 rounded-xl font-medium tracking-wide
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

                {/* MINIMAPA (desktop) */}
                <aside className="hidden lg:block lg:sticky lg:top-6 h-fit">
                    <div className="rounded-2xl shadow-lg p-4 sm:p-5 backdrop-blur border bg-white/70 border-slate-200/70 dark:bg-slate-900/70 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <h3 className="text-slate-950 dark:text-white font-bold">Minimapa</h3>
                            <span className="text-xs text-slate-600 dark:text-slate-300">
                                {answeredCount}/{questions.length}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-emerald-500/70 border border-emerald-500/60" />
                                Correcta
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-red-500/70 border border-red-500/60" />
                                Incorrecta
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-white border border-slate-300 dark:bg-slate-950 dark:border-slate-700" />
                                En blanco
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-blue-500/70 border border-blue-500/70" />
                                Actual
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-amber-400 border border-amber-300" />
                                Marcada
                            </span>
                        </div>

                        <div className="max-h-[48vh] overflow-auto pr-1">
                            <div className="grid grid-cols-5 gap-2">
                                {questions.map((q, idx) => {
                                    const answered = isAnsweredValue(answers[q.id]);
                                    const isCurrent = idx === current;
                                    const flagged = isFlagged(q.id);
                                    const ok = answered ? isCorrectAnswer(q, answers[q.id]) : false;

                                    const base = "relative w-full aspect-square rounded-lg text-sm font-semibold transition select-none";

                                    const style = isCurrent
                                        ? "bg-blue-500/20 border border-blue-500/70 text-slate-950 dark:text-white"
                                        : answered
                                            ? mode === "study"
                                                ? ok
                                                    ? "bg-emerald-500/15 border border-emerald-500/60 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-500/25"
                                                    : "bg-red-500/15 border border-red-500/60 text-red-700 dark:text-red-200 hover:bg-red-500/25"
                                                : "bg-emerald-500/15 border border-emerald-500/60 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-500/25"
                                            : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500";

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
                                            {flagged && (
                                                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-5 flex gap-2">
                            <button
                                onClick={() => {
                                    const i = questions.findIndex((q) => !isAnsweredValue(answers[q.id]));
                                    if (i >= 0) setCurrent(i);
                                }}
                                className="
                  flex-1 py-2 rounded-xl text-sm font-medium
                  border transition
                  bg-white/60 border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-950
                  dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white
                "
                            >
                                Ir a pendientes
                            </button>

                            <button
                                onClick={() => {
                                    const i = questions.findIndex((q) => isFlagged(q.id));
                                    if (i >= 0) setCurrent(i);
                                }}
                                disabled={flaggedCount === 0}
                                className="
                  flex-1 py-2 rounded-xl text-sm font-medium
                  border transition
                  bg-white/60 border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-950
                  dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white
                  disabled:opacity-40
                "
                            >
                                Ir a marcadas
                            </button>
                        </div>

                        <div className="mt-2">
                            <button
                                onClick={goToNextFlagged}
                                disabled={flaggedCount === 0}
                                className="
                  w-full py-2 rounded-xl text-sm font-medium
                  border transition
                  bg-white/60 border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-950
                  dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white
                  disabled:opacity-40
                "
                            >
                                Siguiente marcada
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
