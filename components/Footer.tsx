import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-950 text-stone-500 py-8 text-center text-sm">
            <div className="max-w-screen-xl mx-auto px-8 lg:px-16 w-full">
                <p>&copy; {new Date().getFullYear()} Dra. Camila Rojido. Todos los derechos reservados.</p>
                <p className="mt-2 text-xs">Nº Colegiado: [Número pendiente de actualizar]</p>
            </div>
        </footer>
    );
};