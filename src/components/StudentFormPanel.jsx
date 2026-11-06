import { CheckCircle2, Info, Pencil, UserPlus } from 'lucide-react';
import PanelHeading from './PanelHeading';
import StudentForm from './StudentForm';

export default function StudentFormPanel({ form, isEditing, message, nameRef, onChange, onSubmit, onCancel }) {
    return (
        <section className="panel form-panel">
            <PanelHeading
                icon={isEditing ? Pencil : UserPlus}
                title={isEditing ? 'Editar estudiante' : 'Nuevo estudiante'}
                subtitle={isEditing ? 'Modifica los datos y guarda los cambios' : 'Completa los datos para registrar'}
            />

            <StudentForm
                form={form}
                isEditing={isEditing}
                nameRef={nameRef}
                onChange={onChange}
                onSubmit={onSubmit}
                onCancel={onCancel}
            />

            {message && (
                <div className="success">
                    <CheckCircle2 size={17} />
                    {message}
                </div>
            )}

            <div className="tip">
                <Info size={18} />
                <p>
                    <b>Hook en acción:</b> <code>useRef</code> enfoca automáticamente el campo Nombre al registrar o al pulsar Editar.
                </p>
            </div>
        </section>
    );
}
