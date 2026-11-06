import { Search } from 'lucide-react';
import StudentItem from './StudentItem';

export default function StudentList({ students, editingId, onEdit, onDelete }) {
    if (!students.length) {
        return (
            <div className="student-list">
                <div className="empty">
                    <Search size={30} />
                    <p>No se encontraron estudiantes.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="student-list">
            {students.map(student => (
                <StudentItem
                    key={student.id}
                    student={student}
                    isEditing={student.id === editingId}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
