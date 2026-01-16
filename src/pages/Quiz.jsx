import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import QuestionCard from "../components/QuestionCard";
import formatTime from "../utils/time";

export default function QuizPage({ questions, mode, onFinish, onExit }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(mode === 'exam');

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => setTimer(t => t + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [running]);

    const currentQ = questions[current];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={onExit} className="text-gray-600 hover:text-gray-800">
                            ← Salir
                        </button>
                        <span className="text-sm font-semibold text-gray-600">
                            Pregunta {current + 1} de {questions.length}
                        </span>
                    </div>
                    {mode === 'exam' && (
                        <div className="flex items-center gap-2 text-red-600 font-bold">
                            <Clock className="w-5 h-5" />
                            {formatTime(timer)}
                        </div>
                    )}
                </div>
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                        style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <QuestionCard
                question={currentQ}
                selectedAnswer={answers[currentQ.id]}
                mode={mode}
                onAnswer={(i) => setAnswers({ ...answers, [currentQ.id]: i })}
            />

            <div className="flex justify-between mt-6">
                <button
                    onClick={() => setCurrent(c => c - 1)}
                    disabled={current === 0}
                    className="px-6 py-3 rounded-xl font-semibold disabled:opacity-50 bg-gray-200 hover:bg-gray-300"
                >
                    ← Anterior
                </button>

                {current === questions.length - 1 ? (
                    <button
                        onClick={() => {
                            setRunning(false);
                            onFinish(answers, timer);
                        }}
                        disabled={mode === 'exam' && Object.keys(answers).length < questions.length}
                        className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg disabled:opacity-50"
                    >
                        Finalizar
                    </button>
                ) : (
                    <button
                        onClick={() => setCurrent(c => c + 1)}
                        className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                    >
                        Siguiente →
                    </button>
                )}
            </div>
        </div>
    );
}