import {
    Award,
    CheckCircle,
    ChevronRight,
    Trophy,
    BarChart3,
    RotateCcw,
} from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
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
        {
            type: "failed",
            icon: RotateCcw,
            color: "from-red-600/90 to-orange-500/90",
            title: "Tests de Fallos",
            desc: "Entrena solo las preguntas que has fallado para fijar conceptos.",
            badge: "REVIEW",
        },
    ];

    const totalPct =
        stats.totalQuestions > 0
            ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
            : 0;

    return (
        <main
            className="
        relative min-h-screen overflow-hidden
        bg-slate-50 text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
        >
            {/* ✅ Fondo FlickeringGrid (NO envuelve contenido) */}
            <FlickeringGrid
                className="pointer-events-none absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                maxOpacity={0.22}
                flickerChance={0.08}
                color="rgb(100,116,139)" // slate-500
            />

            {/* ✅ Velo para legibilidad (light/dark) */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-white/65 dark:bg-slate-950/45" />

            {/* ✅ Glow animado por encima del grid y del velo (pero debajo del contenido) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2]">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full blur-3xl opacity-25 dark:opacity-25 bg-gradient-to-br from-blue-500 via-emerald-500 to-slate-900 breathing-glow" />
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full blur-3xl opacity-20 dark:opacity-20 bg-gradient-to-tr from-sky-400 via-emerald-400 to-blue-600 breathing-glow2" />
            </div>

            {/* ✅ Contenido */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 text-sm glow">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        AWS Quiz Tracker · jalando.code vibes
                    </div>

                    <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-slate-900 dark:text-white">Dashboard</span>{" "}
                        <span className="text-slate-600 dark:text-slate-400 font-semibold">
                            de progreso
                        </span>
                    </h1>

                    <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl">
                        Practica con tests globales y por categorías. Guarda tu rendimiento y
                        mejora tu % de acierto.
                    </p>

                    {/* KPI strip */}
                    <div className="mt-6 w-full max-w-2xl card-glass rounded-2xl p-4 sm:p-5 glow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="text-left">
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    Acierto global
                                </p>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {totalPct}%
                                </p>
                            </div>

                            <div className="flex-1">
                                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <div
                                        className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all"
                                        style={{ width: `${totalPct}%` }}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                                    Basado en {stats.totalQuestions || 0} preguntas respondidas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats compactas (más cuadradas) */}
                <div className="mb-8 sm:mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="card-glass rounded-xl p-[1px] glow">
                            <div className="rounded-xl p-3 sm:p-4">
                                <StatCard
                                    icon={Award}
                                    label="Tests"
                                    value={stats.totalTests}
                                    color="blue"
                                    compact
                                />
                            </div>
                        </div>

                        <div className="card-glass rounded-xl p-[1px] glow">
                            <div className="rounded-xl p-3 sm:p-4">
                                <StatCard
                                    icon={CheckCircle}
                                    label="Correctas"
                                    value={stats.correctAnswers}
                                    color="purple"
                                    compact
                                />
                            </div>
                        </div>

                        <div className="card-glass rounded-xl p-[1px] glow">
                            <div className="rounded-xl p-3 sm:p-4">
                                <StatCard
                                    icon={Award}
                                    label="% Acierto"
                                    value={`${totalPct}%`}
                                    color="orange"
                                    compact
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modalidades */}
                <div className="mb-10 sm:mb-12">
                    <div className="mb-4 sm:mb-5">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                            Elige tu modalidad
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                            Una experiencia más oscura + contrastada (azul/verde).
                        </p>
                    </div>

                    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                        {modalityOptions.map((item) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.type}
                                    onClick={() =>
                                        item.type === "failed"
                                            ? onNavigate("failed")
                                            : onNavigate("select", item.type)
                                    }
                                    className={`group relative overflow-hidden rounded-2xl p-[1px] transition-all bg-gradient-to-br ${item.color} glow btn-glow`}
                                >
                                    <div className="relative card-glass rounded-2xl p-5 sm:p-7 text-left">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="p-3 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-700 shrink-0">
                                                    <Icon className="w-7 h-7 text-slate-900 dark:text-white" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-xs text-white dark:text-slate-300 tracking-widest">
                                                        {item.badge}
                                                    </p>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white truncate">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <ChevronRight className="w-6 h-6 text-white dark:text-slate-200 opacity-70 group-hover:opacity-100" />
                                        </div>

                                        <p className="mt-3 sm:mt-4 text-white dark:text-slate-300">
                                            {item.desc}
                                        </p>

                                        <div className="mt-5 sm:mt-6 flex items-center gap-3 text-sm text-white dark:text-slate-200">
                                            <span className="px-3 py-1 rounded-full border border-white/30 dark:border-slate-700 bg-white/20 dark:bg-slate-950/50">
                                                Comenzar
                                            </span>
                                            <span className="text-white/80 dark:text-slate-400 group-hover:text-white dark:group-hover:text-slate-200 transition-colors">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Progreso por categoría */}
                {stats.byCategory && Object.keys(stats.byCategory).length > 0 && (
                    <div className="card-glass rounded-2xl p-5 sm:p-8 glow-strong">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 sm:mb-6">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                    Progreso por categoría
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    Vuelve a la categoría donde estés más floja.
                                </p>
                            </div>

                            <div className="px-3 py-1 rounded-full border border-slate-200/70 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 text-xs text-slate-700 dark:text-slate-200">
                                {Object.keys(stats.byCategory).length} categorías
                            </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            {Object.entries(stats.byCategory).map(([id, data]) => {
                                const cat = CATEGORIES.find((c) => c.id === id);
                                const pct =
                                    data.total > 0
                                        ? Math.round((data.correct / data.total) * 100)
                                        : 0;

                                return (
                                    <div
                                        key={id}
                                        className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4"
                                    >
                                        <div className="flex items-center justify-between gap-4 mb-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <span
                                                    className={`${cat?.color || "bg-slate-700"
                                                        } text-white px-3 py-1 rounded-lg text-sm font-semibold`}
                                                >
                                                    {cat?.name || id}
                                                </span>
                                                <span className="text-xs text-slate-600 dark:text-slate-400 truncate">
                                                    {data.correct}/{data.total}
                                                </span>
                                            </div>

                                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                                                {pct}%
                                            </span>
                                        </div>

                                        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
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
        </main>
    );
}
