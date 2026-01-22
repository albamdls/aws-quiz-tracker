import { Sun, Moon, Home, LayoutGrid, Map, Info } from "lucide-react";
import useTheme from "../hooks/useTheme";

const NAV_ITEMS = [
    { id: "landing", label: "Inicio", icon: Home },
    { id: "home", label: "Dashboard", icon: LayoutGrid },
    { id: "map", label: "Mapa", icon: Map },
    { id: "about", label: "About", icon: Info },
];

export default function Navbar({ onNavigate, currentPage }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="sticky top-3 z-50">
            <nav
                className="
          mx-auto
          w-[min(980px,calc(100%-1rem))]
          rounded-2xl
          border border-slate-200/70 dark:border-slate-800
          bg-white/70 dark:bg-slate-950/70
          backdrop-blur-xl
          shadow-lg shadow-black/5 dark:shadow-black/30
        "
                aria-label="Primary navigation"
            >
                {/* Layout: items (full) + toggle (fixed) */}
                <div className="flex items-center gap-2 px-2 sm:px-3 py-2">
                    {/* NAV: distribuido */}
                    <div className="flex-1">
                        <div className="grid grid-cols-4 gap-1 sm:gap-2">
                            {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
                                const active = currentPage === id;

                                return (
                                    <button
                                        key={id}
                                        onClick={() => onNavigate(id)}
                                        type="button"
                                        className={[
                                            "group w-full",
                                            "h-10 sm:h-11",
                                            "rounded-xl",
                                            "inline-flex items-center justify-center",
                                            "gap-2",
                                            "transition",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40",
                                            active
                                                ? "bg-slate-900/5 dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70"
                                                : "hover:bg-slate-100/70 dark:hover:bg-slate-900/40 border border-transparent",
                                        ].join(" ")}
                                        aria-current={active ? "page" : undefined}
                                    >
                                        <Icon
                                            className={[
                                                "w-5 h-5 shrink-0",
                                                active
                                                    ? "text-slate-950 dark:text-white"
                                                    : "text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white",
                                            ].join(" ")}
                                        />

                                        {/* Label: solo en >= sm para que en iPhone no explote */}
                                        <span
                                            className={[
                                                "hidden sm:inline text-sm font-medium",
                                                active
                                                    ? "text-slate-950 dark:text-white"
                                                    : "text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white",
                                            ].join(" ")}
                                        >
                                            {label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* TOGGLE: fijo a la derecha */}
                    <button
                        onClick={toggleTheme}
                        className="
              inline-flex items-center justify-center
              h-10 w-10 sm:h-11 sm:w-11
              rounded-xl
              border border-slate-200 dark:border-slate-700
              bg-white/60 dark:bg-slate-900/50
              text-slate-700 dark:text-slate-300
              hover:text-slate-950 dark:hover:text-white
              hover:border-slate-300 dark:hover:border-slate-500
              transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40
            "
                        aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                        title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </nav>
        </div>
    );
}
