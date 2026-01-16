import { Clock, BookOpen } from "lucide-react";

export default function ModePicker({ onSelect }) {
    const modes = [
        {
            mode: "exam",
            icon: Clock,
            color: "red",
            title: "Modo Examen",
            features: [
                "Cronómetro activo",
                "Resultados al final",
                "Simula examen real",
                "Sin feedback inmediato",
            ],
        },
        {
            mode: "study",
            icon: BookOpen,
            color: "green",
            title: "Modo Estudio",
            features: [
                "Sin límite de tiempo",
                "Feedback inmediato",
                "Explicaciones detalladas",
                "Aprende mientras practicas",
            ],
        },
    ];

    const colorStyles = {
        red: { border: "border-red-500", bg: "bg-red-100", text: "text-red-600" },
        green: { border: "border-green-500", bg: "bg-green-100", text: "text-green-600" },
    };

    return (
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modes.map((item) => {
                const Icon = item.icon;              // 👈 ahora ESLint lo ve perfecto
                const styles = colorStyles[item.color];

                return (
                    <button
                        key={item.mode}
                        onClick={() => onSelect(item.mode)}
                        className={[
                            "bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all border-t-4 text-left",
                            styles.border,
                        ].join(" ")}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className={["p-3 rounded-lg", styles.bg].join(" ")}>
                                <Icon className={["w-8 h-8", styles.text].join(" ")} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                        </div>

                        <ul className="space-y-2 text-gray-600">
                            {item.features.map((f, i) => (
                                <li key={i}>• {f}</li>
                            ))}
                        </ul>
                    </button>
                );
            })}
        </div>
    );
}
