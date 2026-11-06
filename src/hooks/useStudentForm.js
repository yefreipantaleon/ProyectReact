import { useState } from 'react';
import { JS_ADVANCED } from '../constants/courses';

const EMPTY_FORM = { nombre: '', correo: '', curso: JS_ADVANCED };

export function useStudentForm() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [editingId, setEditingId] = useState(null);

    const isEditing = editingId !== null;

    function setField(name, value) {
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function startEdit(student) {
        setEditingId(student.id);
        setForm({ nombre: student.nombre, correo: student.correo, curso: student.curso });
    }

    function resetForm() {
        setForm(EMPTY_FORM);
        setEditingId(null);
    }

    function getCleanData() {
        const nombre = form.nombre.trim();
        const correo = form.correo.trim();

        if (!nombre || !correo) return null;

        return { ...form, nombre, correo };
    }

    return { form, editingId, isEditing, setField, startEdit, resetForm, getCleanData };
}
