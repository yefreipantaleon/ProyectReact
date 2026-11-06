import { Download, Users } from 'lucide-react';
import PanelHeading from './PanelHeading';
import SearchBar from './SearchBar';
import StudentList from './StudentList';

export default function StudentListPanel({
    students,
    totalCount,
    search,
    editingId,
    onSearchChange,
    onEdit,
    onDelete,
    onExport
}) {
    return (
        <section className="panel list-panel">
            <PanelHeading
                className="panel-heading list-head"
                icon={Users}
                title="Lista de estudiantes"
                subtitle="Consulta y administra los registros"
            >
                <button className="export" onClick={onExport} title="Exportar CSV">
                    <Download size={17} />
                    <span>CSV</span>
                </button>
            </PanelHeading>

            <SearchBar value={search} onChange={onSearchChange} />

            <StudentList
                students={students}
                editingId={editingId}
                onEdit={onEdit}
                onDelete={onDelete}
            />

            <div className="list-footer">
                Mostrando {students.length} de {totalCount} estudiantes
            </div>
        </section>
    );
}
