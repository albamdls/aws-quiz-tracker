export default function MapPage() {
    return (
        <div className="relative min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-slate-950 dark:text-white">
                            AWS Quiz Tracker
                        </span>{" "}
                        ·{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent font-semibold">
                            jalando.code vibes
                        </span>
                    </p>

                    <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                        Mapa mental · Servicios AWS
                    </h1>

                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                        Vista embebida del mapa creado en XMind.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur shadow-xl p-3 sm:p-4">
                    <div className="w-full h-[70vh] min-h-[420px] max-h-[820px] rounded-xl overflow-hidden border border-slate-200/70 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                        <iframe
                            src="https://app.xmind.com/embed/dOuB71v9?sheet-id=null"
                            className="w-full h-full"
                            allowFullScreen
                            title="XMind Services map"
                        />
                    </div>

                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                        Tip: en móvil, gira la pantalla o usa zoom para navegar mejor por el mapa.
                    </p>
                </div>
            </div>
        </div>
    );
}
