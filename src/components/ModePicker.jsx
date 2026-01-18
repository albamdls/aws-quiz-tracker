import { Clock, BookOpen, Check } from "lucide-react";

export default function ModePicker({ onSelect, value }) {
    const modes = [
        { mode: "exam", icon: Clock, title: "Modo Examen", color: "red" },
        { mode: "study", icon: BookOpen, title: "Modo Estudio", color: "green" },
    ];

    const styles = {
        red: {
            ring: "ring-red-400/40",
            border: "border-red-400/50",
            bgSelected: "bg-red-500/18",
            iconBg: "bg-red-500/10",
            iconText: "text-red-200",
            glow: "shadow-[0_0_60px_rgba(248,113,113,0.14)]",
            tick: "border-red-400/50 bg-red-500/15 text-red-200",
        },
        green: {
            ring: "ring-emerald-400/40",
            border: "border-emerald-400/50",
            bgSelected: "bg-emerald-500/18",
            iconBg: "bg-emerald-500/10",
            iconText: "text-emerald-200",
            glow: "shadow-[0_0_60px_rgba(16,185,129,0.14)]",
            tick: "border-emerald-400/50 bg-emerald-500/15 text-emerald-200",
        },
    };

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {modes.map((m) => {
                const Icon = m.icon;
                const s = styles[m.color];
                const isSelected = value === m.mode;

                return (
                    <button
                        key={m.mode}
                        type="button"
                        onClick={() => onSelect(m.mode)}
                        className={[
                            "p-5 rounded-2xl border text-left transition-all duration-300",
                            "backdrop-blur bg-slate-900/65 hover:bg-slate-900/85",
                            "border-slate-800 hover:border-slate-700 ring-1 ring-slate-700/20",
                            isSelected ? `ring-2 ${s.ring} ${s.border} ${s.bgSelected} ${s.glow}` : "",
                        ].join(" ")}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                                <div className={["p-2 rounded-xl border border-slate-700/40", s.iconBg].join(" ")}>
                                    <Icon className={["w-6 h-6", s.iconText].join(" ")} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-extrabold text-white">{m.title}</h3>
                                    <p className="text-sm text-slate-300 mt-1">
                                        {m.mode === "exam"
                                            ? "Cronómetro y resultados al final"
                                            : "Feedback inmediato en cada pregunta"}
                                    </p>
                                </div>
                            </div>

                            {/* ✅ Tic cuando está seleccionado */}
                            <span
                                className={[
                                    "inline-flex h-7 w-7 items-center justify-center rounded-xl border",
                                    "transition-all",
                                    isSelected ? s.tick : "border-slate-700/60 bg-slate-950/40 text-slate-200",
                                ].join(" ")}
                            >
                                <Check className={["h-4 w-4 transition-opacity", isSelected ? "opacity-100" : "opacity-0"].join(" ")} />
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
