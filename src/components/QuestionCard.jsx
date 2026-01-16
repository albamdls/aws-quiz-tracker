import { CheckCircle, XCircle } from "lucide-react";
import { DOMAINS, SERVICE_CATEGORIES } from "../data/config";
import Pill from "./Pill";

export default function QuestionCard({ question, selectedAnswer, mode, onAnswer }) {
    const isAnswered = selectedAnswer !== undefined;
    const isCorrect = selectedAnswer === question.correct;

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-4 flex flex-wrap gap-2">
                <Pill
                    label={DOMAINS.find(d => d.id === question.domain)?.name}
                    color={DOMAINS.find(d => d.id === question.domain)?.color}
                />
                <Pill
                    label={SERVICE_CATEGORIES.find(c => c.id === question.category)?.name}
                    color={SERVICE_CATEGORIES.find(c => c.id === question.category)?.color}
                />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h3>

            <div className="space-y-3">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const showCorrect = mode === 'study' && isAnswered;
                    const isThisCorrect = index === question.correct;

                    let className = 'w-full p-4 rounded-xl border-2 text-left transition-all ';
                    if (showCorrect) {
                        if (isThisCorrect) {
                            className += 'border-green-500 bg-green-50';
                        } else if (isSelected) {
                            className += 'border-red-500 bg-red-50';
                        } else {
                            className += 'border-gray-200 bg-gray-50';
                        }
                    } else if (isSelected) {
                        className += 'border-blue-500 bg-blue-50';
                    } else {
                        className += 'border-gray-300 hover:border-blue-300 hover:bg-blue-50';
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onAnswer(index)}
                            disabled={mode === 'study' && isAnswered}
                            className={className}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${showCorrect && isThisCorrect ? 'border-green-500 bg-green-500' :
                                        showCorrect && isSelected ? 'border-red-500 bg-red-500' :
                                            isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                                    }`}>
                                    {showCorrect && isThisCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                                    {showCorrect && isSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-white" />}
                                </div>
                                <span className="font-medium text-gray-800">{option}</span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {mode === 'study' && isAnswered && (
                <div className={`mt-6 p-4 rounded-xl border-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-start gap-3">
                        {isCorrect ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                            <XCircle className="w-6 h-6 text-red-600" />
                        )}
                        <div>
                            <p className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                            </p>
                            <p className="text-gray-700">{question.explanation}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}