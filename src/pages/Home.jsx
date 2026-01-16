import { Award, BookOpen, BarChart3, CheckCircle, ChevronRight, Trophy } from "lucide-react";
import { DOMAINS } from "../data/config";
import StatCard from "../components/StatCard";

export default function HomePage({ stats, onNavigate }) {
    const modalityOptions = [
        {
            type: "global",
            icon: Trophy,
            color: "from-purple-500 to-purple-700",
            title: "Tests Globales",
            desc: "Simulacros completos con distribución oficial",
        },
        {
            type: "domain",
            icon: BookOpen,
            color: "from-blue-500 to-blue-700",
            title: "Por Dominios",
            desc: "Practica por áreas específicas del examen",
        },
        {
            type: "category",
            icon: BarChart3,
            color: "from-teal-500 to-teal-700",
            title: "Por Categorías",
            desc: "Enfócate en servicios (redes, BD, seguridad...)",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                <p className="text-gray-600">Tu progreso en la preparación para AWS</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard icon={Award} label="Tests completados" value={stats.totalTests} color="blue" />
                <StatCard icon={BookOpen} label="Preguntas respondidas" value={stats.totalQuestions} color="green" />
                <StatCard icon={CheckCircle} label="Respuestas correctas" value={stats.correctAnswers} color="purple" />
                <StatCard
                    icon={BarChart3}
                    label="% Acierto"
                    value={
                        stats.totalQuestions > 0
                            ? `${Math.round((stats.correctAnswers / stats.totalQuestions) * 100)}%`
                            : "0%"
                    }
                    color="orange"
                />
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Elige tu modalidad de práctica</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {modalityOptions.map((item) => {
                        const Icon = item.icon; // ✅ ESLint ya no se queja

                        return (
                            <button
                                key={item.type}
                                onClick={() => onNavigate("select", item.type)}
                                className={`bg-linear-to-br ${item.color} text-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all text-left`}
                            >
                                <Icon className="w-12 h-12 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="opacity-90 mb-4">{item.desc}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Comenzar</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {stats.byDomain && Object.keys(stats.byDomain).length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Progreso por Dominio</h3>

                    <div className="space-y-3">
                        {Object.entries(stats.byDomain).map(([id, data]) => {
                            const domain = DOMAINS.find((d) => d.id === id);
                            const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

                            return (
                                <div key={id} className="flex items-center gap-4">
                                    <span
                                        className={`${domain?.color} text-white px-3 py-1 rounded-lg text-sm font-medium w-48`}
                                    >
                                        {domain?.name}
                                    </span>

                                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                                        <div
                                            className={`${domain?.color} h-3 rounded-full transition-all`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>

                                    <span className="font-bold text-gray-800 w-16 text-right">{pct}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
