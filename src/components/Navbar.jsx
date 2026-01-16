import { Home, Trophy } from "lucide-react";

export default function Navbar({ currentView, onNavigate }) {
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg">
                        <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-800">AWS Practice</span>
                </div>
                {currentView !== 'home' && (
                    <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                        <Home className="w-5 h-5" /> Inicio
                    </button>
                )}
            </div>
        </nav>
    );
}