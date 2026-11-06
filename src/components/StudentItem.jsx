import { Pencil, Trash2 } from 'lucide-react';

export default function StudentItem({ student, isEditing, onEdit, onDelete }) {
    return (
        <div className={isEditing ? 'student editing' : 'student'}>
            <div className="avatar">
                {student.nombre.trim().charAt(0).toUpperCase()}
            </div>
            <div className="student-info">
                <strong>{student.nombre}</strong>
                <small>{student.correo}</small>
                <span className="course">{student.curso}</span>
            </div>
            <button className="update" onClick={() => onEdit(student)} title="Editar estudiante">
                <Pencil size={18} />
            </button>
            <button className="delete" onClick={() => onDelete(student.id)} title="Eliminar estudiante">
                <Trash2 size={18} />
            </button>
        </div>
    );
}
