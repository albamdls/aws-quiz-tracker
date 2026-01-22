export default function StatCard({ icon, label, value, color = "blue" }) {
    const Icon = icon;

    const styles = {
        blue: {
            ring: "ring-blue-500/15 dark:ring-blue-500/20",
            icon: "text-blue-600 dark:text-blue-400",
            value: "text-blue-700 dark:text-blue-400",
            glow:
                "hover:shadow-[0_0_40px_rgba(59,130,246,0.10)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
        },
        green: {
            ring: "ring-emerald-500/15 dark:ring-emerald-500/20",
            icon: "text-emerald-600 dark:text-emerald-400",
            value: "text-emerald-700 dark:text-emerald-400",
            glow:
                "hover:shadow-[0_0_40px_rgba(16,185,129,0.10)] dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
        },
        purple: {
            ring: "ring-purple-500/15 dark:ring-purple-500/20",
            icon: "text-purple-600 dark:text-purple-400",
            value: "text-purple-700 dark:text-purple-400",
            glow:
                "hover:shadow-[0_0_40px_rgba(168,85,247,0.10)] dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
        },
        orange: {
            ring: "ring-amber-500/15 dark:ring-amber-500/20",
            icon: "text-amber-600 dark:text-amber-400",
            value: "text-amber-700 dark:text-amber-400",
            glow:
                "hover:shadow-[0_0_40px_rgba(251,146,60,0.10)] dark:hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]",
        },
    };

    const s = styles[color] ?? styles.blue;

    return (
        <div
            className={[
                "relative rounded-2xl p-6",
                "backdrop-blur",
                "border border-slate-200/70 dark:border-slate-800",
                "bg-white/60 dark:bg-slate-900/60",
                "ring-1",
                s.ring,
                "transition-all duration-300",
                s.glow,
            ].join(" ")}
        >
            {/* Icon */}
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800">
                    <Icon className={["w-5 h-5", s.icon].join(" ")} />
                </div>

                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {label}
                </p>
            </div>

            {/* Value */}
            <p className={["text-3xl font-extrabold tracking-tight", s.value].join(" ")}>
                {value}
            </p>

            {/* Subtle gradient accent */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-40" />
        </div>
    );
}
