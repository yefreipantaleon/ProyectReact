import { BookOpen, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { JS_ADVANCED } from '../constants/courses';
import StatCard from './StatCard';

export default function StatsSection({ students, visibleCount }) {
    const totalCourses = new Set(students.map(s => s.curso)).size;
    const jsCount = students.filter(s => s.curso === JS_ADVANCED).length;

    return (
        <section className="stats">
            <StatCard icon={Users} color="purple" label="Total de estudiantes" value={students.length} />
            <StatCard icon={BookOpen} color="blue" label="Cursos registrados" value={totalCourses} />
            <StatCard icon={GraduationCap} color="orange" label={`En ${JS_ADVANCED}`} value={jsCount} />
            <StatCard icon={CheckCircle2} color="green" label="Registros visibles" value={visibleCount} />
        </section>
    );
}
