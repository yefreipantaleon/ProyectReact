export default function PanelHeading({ icon: Icon, title, subtitle, className = 'panel-heading', children }) {
    return (
        <div className={className}>
            <div className="panel-icon">
                <Icon size={20} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            {children}
        </div>
    );
}
