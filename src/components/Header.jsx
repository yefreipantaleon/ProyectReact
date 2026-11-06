import { GraduationCap, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { dark, toggle } = useTheme();

    return (
        <header className="topbar">
            <div className="brand">
                <div className="brand-icon">
                    <GraduationCap size={25} />
                </div>
                <div>
                    <strong>EduGestión</strong>
                    <small>Laboratorio React · Sesión 13</small>
                </div>
            </div>
            <button className="theme-btn" onClick={toggle}>
                {dark ? <Sun size={18} /> : <Moon size={18} />}
                <span>{dark ? 'Modo claro' : 'Modo oscuro'}</span>
            </button>
        </header>
    );
}
