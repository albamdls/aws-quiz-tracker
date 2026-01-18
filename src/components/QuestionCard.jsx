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
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">{question.question}</h2>

            <div className="space-y-3">
                {question.options.map((opt, idx) => {
                    const isSelected = isMulti ? selectedArr.includes(idx) : selectedAnswer === idx;

                    // ✅ Usa correctArr (siempre array)
                    const isCorrect = showFeedback && correctArr.includes(idx);
                    const isWrong = showFeedback && isSelected && !correctArr.includes(idx);

                    let classes = "p-4 rounded-xl border cursor-pointer transition-all ";

                    if (isCorrect) {
                        classes += "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                    } else if (isWrong) {
                        classes += "border-red-500 bg-red-500/10 text-red-300";
                    } else if (isSelected) {
                        classes += "border-blue-500 bg-blue-500/10 text-blue-300";
                    } else {
                        classes += "border-slate-700 text-slate-200 hover:border-slate-500";
                    }

                    return (
                        <div
                            key={idx}
                            onClick={() => toggleOption(idx)}
                            className={classes}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") toggleOption(idx);
                            }}
                        >
                            {opt}
                        </div>
                    );
                })}
            </div>

            {mode === "study" && isMulti && !showFeedback && (
                <p className="mt-4 text-sm text-slate-400 italic">
                    Selecciona {requiredSelections} respuestas para ver el feedback.
                </p>
            )}
        </div>
    );
}
