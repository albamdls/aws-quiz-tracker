export default function StatCard({ icon, label, value, color = 'blue' }) {

    const Icon = icon;

    const colors = {
        blue: 'bg-blue-50 border-blue-200 text-blue-600',
        green: 'bg-green-50 border-green-200 text-green-600',
        purple: 'bg-purple-50 border-purple-200 text-purple-600',
        orange: 'bg-orange-50 border-orange-200 text-orange-600'
    };

    return (
        <div className={`${colors[color]} rounded-xl p-6 border-2`}>
            <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5" />
                <p className="text-sm font-medium text-gray-600">{label}</p>
            </div>
            <p className={`text-3xl font-bold ${colors[color].split(' ')[2]}`}>{value}</p>
        </div>
    );
}