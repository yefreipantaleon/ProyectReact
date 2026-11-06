# Gestión de Estudiantes — Sesión 13

Aplicación web React con los Hooks `useState`, `useContext`, `useRef` y `useEffect`.

## Requisitos
- Node.js 20.19+ o 22.12+ (se recomienda una versión LTS reciente)
- Visual Studio Code

## Pasos para ejecutar
1. Descomprime el archivo ZIP.
2. Abre la carpeta `react-hooks-s13` en Visual Studio Code.
3. Abre **Terminal > Nuevo terminal**.
4. Ejecuta `npm install` y espera a que termine.
5. Ejecuta `npm run dev`.
6. Abre en el navegador la dirección local que aparece en la terminal (normalmente `http://localhost:5173/`).

## Funcionalidades
- Registrar estudiantes con validación de formulario.
- Buscar estudiantes por nombre, correo o curso.
- Editar estudiantes (nombre, correo y curso) con el botón del lápiz.
- Contador de estudiantes del curso JavaScript Avanzado.
- Eliminar registros con confirmación.
- Cambiar entre tema claro y oscuro (se recuerda al recargar).
- Guardar datos automáticamente en el navegador mediante `localStorage`.
- Exportar registros a CSV.

## Hooks utilizados
- `useState`: estado de estudiantes, formulario, búsqueda y tema.
- `useContext`: compartir el tema entre componentes.
- `useRef`: enfocar el campo Nombre tras guardar o al pulsar Editar.
- `useEffect`: sincronizar datos con `localStorage` y el título de la pestaña.

## Estructura del proyecto
```
vite.config.js            Activa el JSX automático (no hace falta importar React)
src/
├── main.jsx              Punto de entrada: solo monta la app
├── App.jsx               Coordina hooks y componentes
├── style.css
├── components/           Componentes de interfaz (solo muestran datos)
│   ├── Header, Hero, StatsSection, StatCard, PanelHeading
│   ├── StudentFormPanel, StudentForm
│   ├── StudentListPanel, SearchBar, StudentList, StudentItem
│   └── LearningSection, Footer
├── context/ThemeContext.jsx   Tema claro/oscuro (useContext)
├── hooks/                Lógica reutilizable
│   ├── useLocalStorage, useStudents, useStudentForm
│   └── useFlashMessage, useDocumentTitle
├── utils/                Funciones puras (filtrar, exportar CSV)
└── constants/            Cursos, estudiantes iniciales, info de hooks
```

**Nota:** los datos se almacenan solo en el navegador actual, no en un servidor.
