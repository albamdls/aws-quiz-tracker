import { useMemo, useState } from "react";
import { RotateCcw, ChevronRight, AlertTriangle } from "lucide-react";

export default function FailedQuestionsPage({ stats, onBack, onStart }) {
    const [scope, setScope] = useState("global"); // "global" | "service"
    const [count, setCount] = useState(10);

    // stats.failed esperado:
    // failed: { global: [], service: [], byCategory: { [catId]: [] } }
    const totals = useMemo(() => {
        const failed = stats?.failed || {};
        const global = Array.isArray(failed.global) ? failed.global.length : 0;
        const service = Array.isArray(failed.service) ? failed.service.length : 0;
        return { global, service };
    }, [stats]);

    const max = scope === "global" ? totals.global : totals.service;

    // Ajusta automáticamente el count cuando cambias scope o cambia max
    useMemo(() => {
        const safe = Math.max(1, Math.min(count, max || 1));
        if (safe !== count) setCount(safe);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope, max]);

    const canStart = max > 0;

    // ✅ helper: botón "scope" estilo CTA cuando está seleccionado
    const ScopeButton = ({ value, label, title, available }) => {
        const selected = scope === value;

        return (
            <button
                type="button"
                onClick={() => setScope(value)}
                className={[
                    "w-full text-left rounded-2xl px-5 py-4 transition-all",
                    "border border-white/10",
                    selected
                        ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/15 hover:opacity-95 glow btn-glow"
                        : "bg-white/60 dark:bg-slate-950/40 border-slate-200/70 dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:bg-white/80 dark:hover:bg-slate-950/55",
                ].join(" ")}
            >
                <p
                    className={[
                        "text-xs tracking-widest",
                        selected ? "text-white/80" : "text-slate-600 dark:text-slate-400",
                    ].join(" ")}
                >
                    {label}
                </p>

                <p className={["mt-1 text-lg sm:text-xl font-bold", selected ? "text-white" : ""].join(" ")}>
                    {title}
                </p>

                <p
                    className={[
                        "mt-2 text-sm",
                        selected ? "text-white/90" : "text-slate-700 dark:text-slate-300",
                    ].join(" ")}
                >
                    Disponibles: <span className="font-semibold">{available}</span>
                </p>
            </button>
        );
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 text-sm glow">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        Modo repaso · Fallos
                    </div>

                    <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                        <span className="text-slate-900 dark:text-white">Test de fallos</span>{" "}
                        <span className="text-slate-600 dark:text-slate-400 font-semibold">(configuración)</span>
                    </h1>

                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                        Elige el origen de tus fallos y cuántas preguntas quieres practicar.
                    </p>
                </div>

                <button
                    onClick={onBack}
                    className="shrink-0 px-4 py-2 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-slate-950/60 transition glow"
                >
                    Volver
                </button>
            </div>

            {/* Card principal */}
            <div className="card-glass rounded-2xl p-5 sm:p-8 glow-strong">
                {/* Selector scope */}
                <div className="mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        ¿Qué quieres repasar?
                    </h2>

                    {/* ✅ ahora se ven como CTA cuando están seleccionados */}
                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                        <ScopeButton
                            value="global"
                            label="GLOBAL"
                            title="Fallos en tests globales"
                            available={totals.global}
                        />
                        <ScopeButton
                            value="service"
                            label="SERVICIOS"
                            title="Fallos por categorías/servicios"
                            available={totals.service}
                        />
                    </div>

                    {!canStart && (
                        <div className="mt-4 rounded-2xl border border-red-200/60 dark:border-red-900/40 bg-red-50/70 dark:bg-red-950/20 p-4 flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                            <p className="text-sm text-slate-800 dark:text-slate-200">
                                Aún no tienes preguntas falladas registradas para este origen. Haz algún test primero y vuelve
                                aquí 🙂
                            </p>
                        </div>
                    )}
                </div>

                {/* Selector cantidad */}
                <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-5">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">Número de preguntas</p>
                            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                {canStart ? count : 0}
                            </p>
                        </div>

                        <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                            Máximo disponible: <span className="font-semibold">{max}</span>
                        </div>
                    </div>

                    <input
                        className="mt-4 w-full"
                        type="range"
                        min={1}
                        max={Math.max(1, max)}
                        value={canStart ? count : 1}
                        onChange={(e) => setCount(Number(e.target.value))}
                        disabled={!canStart}
                    />

                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>1</span>
                        <span>{Math.max(1, max)}</span>
                    </div>

                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={() => onStart(scope, count)}
                            disabled={!canStart}
                            className={[
                                "inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all",
                                "bg-gradient-to-r from-red-600 to-orange-500 text-white",
                                canStart ? "hover:opacity-95 glow btn-glow" : "opacity-50 cursor-not-allowed",
                            ].join(" ")}
                        >
                            <RotateCcw className="w-5 h-5" />
                            Empezar test
                            <ChevronRight className="w-5 h-5 opacity-90" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
