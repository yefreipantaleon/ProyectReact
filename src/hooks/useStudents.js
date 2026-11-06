import { INITIAL_STUDENTS } from '../constants/initialStudents';
import { useLocalStorage } from './useLocalStorage';

export function useStudents() {
    const [students, setStudents] = useLocalStorage('s13_estudiantes', INITIAL_STUDENTS);

    function addStudent(data) {
        setStudents(prev => [{ ...data, id: Date.now() }, ...prev]);
    }

    function updateStudent(id, data) {
        setStudents(prev => prev.map(s => (s.id === id ? { ...s, ...data } : s)));
    }

    function removeStudent(id) {
        setStudents(prev => prev.filter(s => s.id !== id));
    }

    return { students, addStudent, updateStudent, removeStudent };
}
