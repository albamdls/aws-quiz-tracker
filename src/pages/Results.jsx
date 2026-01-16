import { Trophy, CheckCircle, XCircle } from "lucide-react";
import formatTime from "../utils/time";
import * as scoring from "../utils/scoring";

export default function ResultsPage({ questions, answers, timer, mode, onExit }) {
    const score = scoring.calculate(questions, answers);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                        <Trophy className="w-16 h-16 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">¡Test Completado!</h2>
                    {mode === 'exam' && <p className="text-gray-600">Tiempo: {formatTime(timer)}</p>}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-xl p-6 text-center border-2 border-blue-200">
                        <p className="text-gray-600 mb-2">Total</p>
                        <p className="text-4xl font-bold text-blue-600">{questions.length}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
                        <p className="text-gray-600 mb-2">Correctas</p>
                        <p className="text-4xl font-bold text-green-600">{score.correct}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 text-center border-2 border-purple-200">
                        <p className="text-gray-600 mb-2">Puntuación</p>
                        <p className="text-4xl font-bold text-purple-600">{score.percentage}%</p>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-gray-800">Resumen</h3>
                    {questions.map((q, i) => {
                        const isCorrect = answers[q.id] === q.correct;
                        return (
                            <div
                                key={q.id}
                                className={`p-4 rounded-xl border-2 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                            >
                                <div className="flex items-start gap-3">
                                    {isCorrect ? (
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    ) : (
                                        <XCircle className="w-6 h-6 text-red-600" />
                                    )}
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800 mb-2">{i + 1}. {q.question}</p>
                                        <p className="text-sm text-gray-600">Tu respuesta: {q.options[answers[q.id]]}</p>
                                        {!isCorrect && (
                                            <p className="text-sm text-gray-600">Correcta: {q.options[q.correct]}</p>
                                        )}
                                        <p className="text-sm text-gray-700 italic mt-2">{q.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={onExit}
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}