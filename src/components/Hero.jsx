import { BookOpen } from 'lucide-react';
import { HOOKS_INFO } from '../constants/hooksInfo';

export default function Hero() {
    return (
        <section className="hero">
            <div className="eyebrow">
                <BookOpen size={15} /> PRÁCTICA GUIADA · REACT HOOKS
            </div>
            <h1>
                Sistema de Gestión
                <br />
                <span>de Estudiantes</span>
            </h1>
            <p>
                Una aplicación interactiva para aprender React construyendo. Registra estudiantes, organiza la información y descubre cómo funcionan los Hooks.
            </p>
            <div className="hook-tags">
                {HOOKS_INFO.map(hook => (
                    <span key={hook.name}>{hook.name}</span>
                ))}
            </div>
        </section>
    );
}
