export default function QuestionCard({ question, selectedAnswer, mode, onAnswer }) {
    if (!question) return null;

    const isMulti = Boolean(question.multipleAnswers);

    // ✅ Normaliza selectedAnswer a array para multi
    const selectedArr = Array.isArray(selectedAnswer) ? selectedAnswer : [];

    // ✅ Normaliza correct siempre a array (evita el error .includes)
    const correctArr = Array.isArray(question.correct) ? question.correct : [question.correct];

    // ✅ En multi: nº de selecciones requeridas = nº de correctas (normalmente 2)
    const requiredSelections = correctArr.length || 1;

    // ✅ Respondida:
    // - multi: cuando selecciona tantas como correctas
    // - single: cuando hay un índice seleccionado
    const hasAnswered = isMulti
        ? selectedArr.length >= requiredSelections
        : selectedAnswer !== undefined && selectedAnswer !== null;

    // ✅ Solo mostramos feedback en modo estudio cuando ya "respondió"
    const showFeedback = mode === "study" && hasAnswered;

    function toggleOption(index) {
        // ✅ En estudio: bloquea cambios cuando ya completó el nº requerido (para mostrar feedback)
        if (mode === "study" && hasAnswered) return;

        // Single
        if (!isMulti) {
            onAnswer(index);
            return;
        }

        // Multi: deseleccionar
        if (selectedArr.includes(index)) {
            onAnswer(selectedArr.filter((i) => i !== index));
            return;
        }

        // ✅ Evitar seleccionar más de las necesarias (solo en study)
        if (mode === "study" && selectedArr.length >= requiredSelections) return;

        onAnswer([...selectedArr, index]);
    }

    return (
        <div
            className="
        rounded-2xl border shadow-lg
        p-3 sm:p-6
        bg-white/70 border-slate-200/70 text-slate-900
        dark:bg-slate-900/70 dark:border-slate-800 dark:text-slate-100
        backdrop-blur
      "
        >
            {/* Enunciado más compacto en móvil */}
            <h2 className="text-base sm:text-xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-6 leading-snug">
                {question.question}
            </h2>

            {/* Opciones más compactas en móvil */}
            <div className="space-y-2 sm:space-y-3">
                {question.options.map((opt, idx) => {
                    const isSelected = isMulti ? selectedArr.includes(idx) : selectedAnswer === idx;

                    const isCorrect = showFeedback && correctArr.includes(idx);
                    const isWrong = showFeedback && isSelected && !correctArr.includes(idx);

                    let classes =
                        "p-3 sm:p-4 rounded-xl border cursor-pointer transition-all outline-none " +
                        "text-sm sm:text-base leading-snug " +
                        "focus-visible:ring-2 focus-visible:ring-emerald-400/40 ";

                    if (isCorrect) {
                        classes +=
                            "border-emerald-400/70 bg-emerald-500/10 text-emerald-900 " +
                            "dark:border-emerald-400/50 dark:bg-emerald-500/15 dark:text-emerald-200";
                    } else if (isWrong) {
                        classes +=
                            "border-red-400/70 bg-red-500/10 text-red-900 " +
                            "dark:border-red-400/50 dark:bg-red-500/15 dark:text-red-200";
                    } else if (isSelected) {
                        classes +=
                            "border-sky-400/70 bg-sky-500/10 text-slate-900 " +
                            "dark:border-sky-400/50 dark:bg-sky-500/15 dark:text-sky-100";
                    } else {
                        classes +=
                            "border-slate-200/80 bg-white/60 text-slate-800 hover:border-slate-300 hover:bg-white/80 " +
                            "dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-950/45";
                    }

                    return (
                        <div
                            key={idx}
                            onClick={() => toggleOption(idx)}
                            className={classes}
                            role="button"
                            tabIndex={0}
                            aria-pressed={isSelected}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") toggleOption(idx);
                            }}
                        >
                            {opt}
                        </div>
                    );
                })}
            </div>

            {/* Hint multi: más pequeño en móvil */}
            {mode === "study" && isMulti && !showFeedback && (
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
                    Selecciona {requiredSelections} respuestas para ver el feedback.
                </p>
            )}
        </div>
    );
}
