import { Sun, Moon, Home } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function Navbar({ onNavigate }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="
      sticky top-0 z-50
      border-b border-slate-800
      bg-slate-950/80 backdrop-blur
    ">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* LEFT · Home */}
                <button
                    onClick={() => onNavigate("home")}
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition"
                >
                    <Home className="w-5 h-5" />
                    <span className="hidden sm:inline text-sm font-medium">
                        Inicio
                    </span>
                </button>

                {/* CENTER · Brand */}
                <div className="text-sm text-slate-400 font-medium">
                    AWS Quiz Tracker ·{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        jalando.code
                    </span>
                </div>

                {/* RIGHT · Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="
            p-2 rounded-xl
            border border-slate-700
            bg-slate-900/60
            text-slate-300 hover:text-white
            hover:border-slate-500
            transition
          "
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <Sun className="w-5 h-5" />
                    ) : (
                        <Moon className="w-5 h-5" />
                    )}
                </button>

            </div>
        </nav>
    );
}
