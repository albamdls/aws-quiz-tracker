import { useState } from "react";
import ModePicker from "../components/ModePicker";
import { DOMAINS, SERVICE_CATEGORIES } from "../data/config";

export default function SelectPage({ modality, onBack, onStart }) {
    const [selected, setSelected] = useState(null);
    const [setMode] = useState(null);

    const items = modality === 'global' ? GLOBAL_TESTS : modality === 'domain' ? DOMAINS : SERVICE_CATEGORIES;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <button onClick={onBack} className="mb-6 text-gray-600 hover:text-gray-800">
                ← Volver
            </button>

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {modality === 'global' && 'Tests Globales'}
                    {modality === 'domain' && 'Selecciona un Dominio'}
                    {modality === 'category' && 'Selecciona una Categoría'}
                </h1>
                <p className="text-gray-600">
                    {modality === 'global' && 'Simulacros completos'}
                    {modality === 'domain' && 'Practica por áreas'}
                    {modality === 'category' && 'Enfócate en servicios'}
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Selecciona una opción</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setSelected(item.id)}
                            className={`p-6 rounded-xl border-2 text-left transition-all ${selected === item.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'
                                }`}
                        >
                            <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                            {modality === 'global' && (
                                <p className="text-sm text-gray-600">{item.totalQuestions} preguntas</p>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {selected && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Selecciona el modo</h2>
                    <ModePicker onSelect={(m) => { setMode(m); onStart(modality, selected, m); }} />
                </div>
            )}
        </div>
    );
}