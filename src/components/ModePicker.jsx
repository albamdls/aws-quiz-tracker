import { Clock, BookOpen, Check } from "lucide-react";

export default function ModePicker({ onSelect, value }) {
    const modes = [
        { mode: "exam", icon: Clock, title: "Modo Examen", color: "red" },
        { mode: "study", icon: BookOpen, title: "Modo Estudio", color: "green" },
    ];

    // ✅ Colores por modo (compatibles con light/dark)
    const styles = {
        red: {
            ring: "ring-red-500/30 dark:ring-red-400/35",
            border: "border-red-500/35 dark:border-red-400/45",
            bgSelected: "bg-red-500/10 dark:bg-red-500/15",
            iconBg: "bg-red-500/10 dark:bg-red-500/12",
            iconText: "text-red-600 dark:text-red-200",
            glow: "shadow-[0_0_60px_rgba(248,113,113,0.12)]",
            tick:
                "border-red-500/35 bg-red-500/10 text-red-700 dark:border-red-400/45 dark:bg-red-500/15 dark:text-red-200",
            chip:
                "bg-red-500/10 text-red-700 border-red-500/25 dark:bg-red-500/15 dark:text-red-200 dark:border-red-400/30",
            focus: "focus-visible:ring-red-500/40 dark:focus-visible:ring-red-400/40",
        },
        green: {
            ring: "ring-emerald-500/30 dark:ring-emerald-400/35",
            border: "border-emerald-500/35 dark:border-emerald-400/45",
            bgSelected: "bg-emerald-500/10 dark:bg-emerald-500/15",
            iconBg: "bg-emerald-500/10 dark:bg-emerald-500/12",
            iconText: "text-emerald-700 dark:text-emerald-200",
            glow: "shadow-[0_0_60px_rgba(16,185,129,0.12)]",
            tick:
                "border-emerald-500/35 bg-emerald-500/10 text-emerald-800 dark:border-emerald-400/45 dark:bg-emerald-500/15 dark:text-emerald-200",
            chip:
                "bg-emerald-500/10 text-emerald-800 border-emerald-500/25 dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/30",
            focus:
                "focus-visible:ring-emerald-500/40 dark:focus-visible:ring-emerald-400/40",
        },
    };

    return (
        <div role="radiogroup" aria-label="Selecciona el modo de práctica">
            {/* ✅ MOBILE: compacto, 2 botones en fila */}
            <div className="grid grid-cols-2 gap-2 md:hidden">
                {modes.map((m) => {
                    const Icon = m.icon;
                    const s = styles[m.color];
                    const isSelected = value === m.mode;

                    return (
                        <button
                            key={m.mode}
                            type="button"
                            onClick={() => onSelect(m.mode)}
                            role="radio"
                            aria-checked={isSelected}
                            className={[
                                "relative flex items-center justify-center gap-2",
                                "px-3 py-3 rounded-xl border",
                                "text-sm font-semibold transition",
                                "bg-white/70 border-slate-200 text-slate-800 hover:bg-white",
                                "dark:bg-slate-950/50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-950/70",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
                                s.focus,
                                isSelected ? `${s.border} ${s.bgSelected} ring-2 ${s.ring}` : "",
                            ].join(" ")}
                        >
                            <Icon className={["w-4 h-4", isSelected ? s.iconText : "text-slate-500 dark:text-slate-400"].join(" ")} />
                            <span className="truncate">{m.mode === "exam" ? "Examen" : "Estudio"}</span>

                            {/* Check mini */}
                            <span
                                className={[
                                    "absolute right-2 top-1/2 -translate-y-1/2",
                                    "inline-flex h-6 w-6 items-center justify-center rounded-lg border",
                                    "transition-all",
                                    isSelected ? s.tick : "border-slate-200 bg-white/60 text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200",
                                ].join(" ")}
                                aria-hidden="true"
                            >
                                <Check className={["h-4 w-4 transition-opacity", isSelected ? "opacity-100" : "opacity-0"].join(" ")} />
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* ✅ TABLET/DESKTOP: cards bonitas */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
                {modes.map((m) => {
                    const Icon = m.icon;
                    const s = styles[m.color];
                    const isSelected = value === m.mode;

                    return (
                        <button
                            key={m.mode}
                            type="button"
                            onClick={() => onSelect(m.mode)}
                            role="radio"
                            aria-checked={isSelected}
                            className={[
                                "p-5 rounded-2xl border text-left transition-all duration-300",
                                // Light
                                "bg-white/70 hover:bg-white border-slate-200 ring-1 ring-slate-200/60",
                                // Dark
                                "dark:bg-slate-900/60 dark:hover:bg-slate-900/75 dark:border-slate-800 dark:ring-slate-800/60",
                                "backdrop-blur",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
                                s.focus,
                                isSelected ? `ring-2 ${s.ring} ${s.border} ${s.bgSelected} ${s.glow}` : "",
                            ].join(" ")}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3 min-w-0">
                                    <div
                                        className={[
                                            "p-2 rounded-xl border",
                                            "border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-950/40",
                                            s.iconBg,
                                        ].join(" ")}
                                    >
                                        <Icon className={["w-6 h-6", s.iconText].join(" ")} />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                                            {m.title}
                                        </h3>

                                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                            {m.mode === "exam"
                                                ? "Cronómetro y resultados al final"
                                                : "Feedback inmediato en cada pregunta"}
                                        </p>

                                        {/* Chip extra info (mejora scannability) */}
                                        <div className="mt-3">
                                            <span
                                                className={[
                                                    "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-semibold",
                                                    "border-slate-200 text-slate-700 bg-white/60 dark:border-slate-800 dark:text-slate-200 dark:bg-slate-950/30",
                                                    isSelected ? s.chip : "",
                                                ].join(" ")}
                                            >
                                                {m.mode === "exam" ? "⏱️ Ritmo real" : "🧠 Aprende al instante"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* ✅ Tic */}
                                <span
                                    className={[
                                        "inline-flex h-8 w-8 items-center justify-center rounded-xl border",
                                        "transition-all",
                                        isSelected
                                            ? s.tick
                                            : "border-slate-200 bg-white/60 text-slate-700 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200",
                                    ].join(" ")}
                                    aria-hidden="true"
                                >
                                    <Check
                                        className={[
                                            "h-4 w-4 transition-opacity",
                                            isSelected ? "opacity-100" : "opacity-0",
                                        ].join(" ")}
                                    />
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
