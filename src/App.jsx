import { useRef, useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { useFlashMessage } from './hooks/useFlashMessage';
import { useStudentForm } from './hooks/useStudentForm';
import { useStudents } from './hooks/useStudents';
import { exportStudentsCSV } from './utils/exportStudentsCSV';
import { filterStudents } from './utils/filterStudents';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningSection from './components/LearningSection';
import StatsSection from './components/StatsSection';
import StudentFormPanel from './components/StudentFormPanel';
import StudentListPanel from './components/StudentListPanel';

export default function App() {
    const { dark } = useTheme();
    const { students, addStudent, updateStudent, removeStudent } = useStudents();
    const { form, editingId, isEditing, setField, startEdit, resetForm, getCleanData } = useStudentForm();
    const { message, showMessage, clearMessage } = useFlashMessage();
    const [search, setSearch] = useState('');
    const nameRef = useRef(null);

    useDocumentTitle(`${students.length} estudiantes | EduGestión`);

    const filtered = filterStudents(students, search);

    function handleSubmit(e) {
        e.preventDefault();

        const data = getCleanData();
        if (!data) return;

        if (isEditing) {
            updateStudent(editingId, data);
            showMessage('Estudiante actualizado correctamente');
        } else {
            addStudent(data);
            showMessage('Estudiante registrado correctamente');
        }

        resetForm();
        nameRef.current?.focus();
    }

    function handleEdit(student) {
        startEdit(student);
        clearMessage();
        nameRef.current?.focus();
    }

    function handleDelete(id) {
        if (!window.confirm('¿Eliminar este estudiante?')) return;

        removeStudent(id);
        if (editingId === id) resetForm();
    }

    return (
        <div className={dark ? 'app dark' : 'app'}>
            <Header />
            <main className="container">
                <Hero />
                <StatsSection students={students} visibleCount={filtered.length} />

                <div className="workspace">
                    <StudentFormPanel
                        form={form}
                        isEditing={isEditing}
                        message={message}
                        nameRef={nameRef}
                        onChange={setField}
                        onSubmit={handleSubmit}
                        onCancel={resetForm}
                    />
                    <StudentListPanel
                        students={filtered}
                        totalCount={students.length}
                        search={search}
                        editingId={editingId}
                        onSearchChange={setSearch}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onExport={() => exportStudentsCSV(students)}
                    />
                </div>

                <LearningSection />
                <Footer />
            </main>
        </div>
    );
}
