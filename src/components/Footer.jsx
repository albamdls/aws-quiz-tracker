import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer({ onNavigate }) {
    return (
        <footer
            className="
        border-t border-slate-200/70 dark:border-slate-800
        bg-white/70 dark:bg-slate-950/70
        backdrop-blur
      "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
                <div
                    className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            text-sm
            text-slate-600 dark:text-slate-400
          "
                >
                    {/* LEFT · Brand */}
                    <div className="flex items-center gap-3">
                        <div
                            className="
                h-8 w-8 rounded-lg
                border border-slate-200/70 dark:border-slate-800
                bg-white/60 dark:bg-slate-900/60
                grid place-items-center
              "
                        >
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                AWS
                            </span>
                        </div>

                        <span className="font-medium text-slate-900 dark:text-slate-200">
                            AWS Quiz Tracker
                        </span>
                    </div>

                    {/* CENTER · Made with */}
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500">
                        <span>Made with</span>

                        <Heart
                            className="w-4 h-4 text-red-500/90 dark:text-red-400 inline-block align-middle"
                            aria-label="love"
                        />

                        <span>by</span>

                        <a
                            href="https://albamdls.github.io/portfolio-albamora/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                font-medium
                text-slate-700 hover:text-slate-950
                dark:text-slate-300 dark:hover:text-white
                underline underline-offset-4 decoration-transparent hover:decoration-current
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:rounded
              "
                        >
                            jalando.code
                        </a>
                    </div>

                    {/* RIGHT · Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/albamdls"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                text-slate-600 hover:text-slate-950
                dark:text-slate-300 dark:hover:text-white
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:rounded-xl
              "
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/alba-mora-de-la-sen/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                text-slate-600 hover:text-slate-950
                dark:text-slate-300 dark:hover:text-white
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:rounded-xl
              "
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <button
                            onClick={() => onNavigate("about")}
                            className="
                text-slate-600 hover:text-slate-950
                dark:text-slate-300 dark:hover:text-white
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:rounded-xl
              "
                            type="button"
                        >
                            About / Legal
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
