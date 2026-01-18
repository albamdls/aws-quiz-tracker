import { Award, CheckCircle, ChevronRight, Trophy, BarChart3 } from "lucide-react";
import StatCard from "../components/StatCard";
import { CATEGORIES } from "../data/categories";

export default function HomePage({ stats, onNavigate }) {
    const modalityOptions = [
        {
            type: "global",
            icon: Trophy,
            color: "from-blue-600/90 to-emerald-600/90",
            title: "Tests Globales",
            desc: "Simulacros completos. Elige el examen y el modo.",
            badge: "EXAM MODE",
        },
        {
            type: "category",
            icon: BarChart3,
            color: "from-emerald-600/90 to-sky-600/90",
            title: "Por Categorías",
            desc: "Selecciona una o varias categorías de servicios.",
            badge: "FOCUS",
        },
    ];

    const totalPct =
        stats.totalQuestions > 0
            ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
            : 0;

    return (
        <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-500 via-emerald-500 to-slate-900 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 text-sm glow">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        AWS Quiz Tracker · jalando.code vibes
                    </div>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-white">Dashboard</span>{" "}
                        <span className="text-slate-400 font-semibold">de progreso</span>
                    </h1>

                    <p className="mt-3 text-slate-300 max-w-2xl">
                        Practica con tests globales y por categorías. Guarda tu rendimiento y mejora
                        tu % de acierto.
                    </p>

                    {/* Small KPI strip */}
                    <div className="mt-6 w-full max-w-2xl card-glass rounded-2xl p-4 glow">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-slate-300 text-sm">Acierto global</p>
                                <p className="text-2xl font-bold text-white">{totalPct}%</p>
                            </div>

                            <div className="flex-1">
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div
                                        className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all"
                                        style={{ width: `${totalPct}%` }}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-slate-400">
                                    Basado en {stats.totalQuestions || 0} preguntas respondidas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="card-glass rounded-2xl p-1 glow">
                        <div className="rounded-2xl p-6">
                            <StatCard
                                icon={Award}
                                label="Tests completados"
                                value={stats.totalTests}
                                color="blue"
                            />
                        </div>
                    </div>

                    <div className="card-glass rounded-2xl p-1 glow">
                        <div className="rounded-2xl p-6">
                            <StatCard
                                icon={CheckCircle}
                                label="Correctas"
                                value={stats.correctAnswers}
                                color="purple"
                            />
                        </div>
                    </div>

                    <div className="card-glass rounded-2xl p-1 glow">
                        <div className="rounded-2xl p-6">
                            <StatCard
                                icon={Award}
                                label="% Acierto"
                                value={`${totalPct}%`}
                                color="orange"
                            />
                        </div>
                    </div>
                </div>

                {/* Modality */}
                <div className="mb-12">
                    <div className="flex items-end justify-between mb-5">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Elige tu modalidad</h2>
                            <p className="text-slate-300 text-sm">
                                Una experiencia más oscura + contrastada (azul/verde).
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {modalityOptions.map((item) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.type}
                                    onClick={() => onNavigate("select", item.type)}
                                    className={[
                                        "group relative overflow-hidden rounded-2xl p-[1px] transition-all",
                                        "bg-gradient-to-br",
                                        item.color,
                                        "glow btn-glow",
                                    ].join(" ")}
                                >
                                    <div className="relative card-glass rounded-2xl p-7 text-left">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-700">
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-300 tracking-widest">
                                                        {item.badge}
                                                    </p>
                                                    <h3 className="text-2xl font-bold text-white">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                                                <ChevronRight className="w-6 h-6 text-slate-200" />
                                            </div>
                                        </div>

                                        <p className="mt-4 text-slate-300">{item.desc}</p>

                                        <div className="mt-6 flex items-center gap-3 text-sm text-slate-200">
                                            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-950/50">
                                                Comenzar
                                            </span>
                                            <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                                                →
                                            </span>
                                        </div>

                                        {/* subtle shine */}
                                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Progress by category */}
                {stats.byCategory && Object.keys(stats.byCategory).length > 0 && (
                    <div className="card-glass rounded-2xl p-8 glow-strong">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">Progreso por categoría</h3>
                                <p className="text-slate-300 text-sm">
                                    Vuelve a la categoría donde estés más floja.
                                </p>
                            </div>
                            <div className="px-3 py-1 rounded-full border border-slate-700 bg-slate-950/50 text-xs text-slate-200">
                                {Object.keys(stats.byCategory).length} categorías
                            </div>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(stats.byCategory).map(([id, data]) => {
                                const cat = CATEGORIES.find((c) => c.id === id);
                                const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

                                return (
                                    <div key={id} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                                        <div className="flex items-center justify-between gap-4 mb-3">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={[
                                                        cat?.color || "bg-slate-700",
                                                        "text-white px-3 py-1 rounded-lg text-sm font-semibold",
                                                    ].join(" ")}
                                                >
                                                    {cat?.name || id}
                                                </span>
                                                <span className="text-xs text-slate-400">
                                                    {data.correct}/{data.total}
                                                </span>
                                            </div>

                                            <span className="text-sm font-bold text-white">{pct}%</span>
                                        </div>

                                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                            <div
                                                className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
