function buildCSV(students) {
    const rows = [
        ['Nombre', 'Correo', 'Curso'],
        ...students.map(s => [s.nombre, s.correo, s.curso])
    ];

    return '\uFEFF' + rows
        .map(row => row.map(v => '"' + String(v).replaceAll('"', '""') + '"').join(','))
        .join('\r\n');
}

export function exportStudentsCSV(students, fileName = 'estudiantes.csv') {
    const csv = buildCSV(students);
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');

    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}
