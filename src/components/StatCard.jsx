export default function StatCard({ icon: Icon, color, label, value }) {
    return (
        <div className="stat">
            <div className={`stat-icon ${color}`}>
                <Icon size={23} />
            </div>
            <div>
                <small>{label}</small>
                <strong>{value}</strong>
            </div>
        </div>
    );
}
