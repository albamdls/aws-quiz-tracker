export default function Pill({ label, color = 'bg-gray-500' }) {
    return (
        <span className={`${color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
            {label}
        </span>
    );
}
