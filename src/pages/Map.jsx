export default function MapPage() {
    return (
        <div className="relative min-h-screen">
            {/* Fondo estilo app */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-slate-950" />
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-emerald-600/25 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950 to-slate-950" />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">AWS Quiz Tracker</span>{" "}
                            <span className="text-slate-400">·</span>{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                                jalando.code vibes
                            </span>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-2">
                            Mapa mental · Servicios AWS
                        </h1>
                        <p className="text-slate-300 mt-2">
                            Vista embebida del mapa creado en XMind.
                        </p>
                    </div>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur shadow-lg p-4">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                        <iframe src="https://app.xmind.com/embed/dOuB71v9?sheet-id=null" width="900px" height="540px" frameborder="0" scrolling="no" allow="fullscreen"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
