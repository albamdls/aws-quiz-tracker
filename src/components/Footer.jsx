import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer({ onNavigate }) {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">

                    {/* LEFT · Brand */}
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg border border-slate-800 bg-slate-900/60 grid place-items-center">
                            <span className="text-xs font-bold text-emerald-400">AWS</span>
                        </div>

                        <span className="font-medium text-slate-200">
                            AWS Quiz Tracker
                        </span>
                    </div>

                    {/* CENTER · Made with */}
                    {/* CENTER · Made with */}
                    <div className="flex items-center gap-1 text-slate-500">
                        <span>Made with</span>

                        <Heart
                            className="w-4 h-4 text-red-400 inline-block align-middle"
                            aria-label="love"
                        />

                        <span>by</span>

                        <a
                            href="https://albamora.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white transition font-medium"
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
                            className="hover:text-white transition"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/alba-mora-de-la-sen/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <button
                            onClick={() => onNavigate("about")}
                            className="hover:text-white transition"
                        >
                            About / Legal
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
