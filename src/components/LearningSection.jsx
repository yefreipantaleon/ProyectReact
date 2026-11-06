import { HOOKS_INFO } from '../constants/hooksInfo';

export default function LearningSection() {
    return (
        <section className="learning">
            <div>
                <span className="learning-label">OBJETIVO DE APRENDIZAJE</span>
                <h2>¿Qué Hooks estamos utilizando?</h2>
                <p>Los cuatro conceptos de la sesión 13, aplicados a un caso real.</p>
            </div>
            <div className="hook-grid">
                {HOOKS_INFO.map(hook => (
                    <div key={hook.name}>
                        <code>{hook.name}</code>
                        <p>{hook.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
