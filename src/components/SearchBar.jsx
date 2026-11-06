import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
    return (
        <div className="search">
            <Search size={19} />
            <input
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Buscar por nombre, correo o curso..."
            />
        </div>
    );
}
