import { Save, UserPlus, X } from 'lucide-react';
import { COURSES } from '../constants/courses';

export default function StudentForm({ form, isEditing, nameRef, onChange, onSubmit, onCancel }) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                Nombre completo
                <input
                    ref={nameRef}
                    required
                    value={form.nombre}
                    onChange={e => onChange('nombre', e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    maxLength={80}
                />
            </label>
            <label>
                Correo electrónico
                <input
                    type="email"
                    required
                    value={form.correo}
                    onChange={e => onChange('correo', e.target.value)}
                    placeholder="estudiante@correo.com"
                />
            </label>
            <label>
                Curso
                <select value={form.curso} onChange={e => onChange('curso', e.target.value)}>
                    {COURSES.map(course => (
                        <option key={course}>{course}</option>
                    ))}
                </select>
            </label>
            <button className="primary" type="submit">
                {isEditing ? <Save size={18} /> : <UserPlus size={18} />}
                {isEditing ? 'Guardar cambios' : 'Registrar estudiante'}
            </button>
            {isEditing && (
                <button className="secondary" type="button" onClick={onCancel}>
                    <X size={18} /> Cancelar edición
                </button>
            )}
        </form>
    );
}
