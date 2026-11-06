export function filterStudents(students, search) {
    const term = search.toLowerCase();

    return students.filter(s =>
        `${s.nombre} ${s.correo} ${s.curso}`.toLowerCase().includes(term)
    );
}
