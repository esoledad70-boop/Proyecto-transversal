import React from 'react';

interface SidebarProps {
  seccion: string;
  setSeccion: (seccion: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ seccion, setSeccion }) => {
  return (
    <aside className="sidebar">
      <button 
        className={seccion === 'Personal' ? 'active' : ''} 
        onClick={() => setSeccion('Personal')}
      >
        Personal
      </button>
      <button 
        className={seccion === 'Inventario' ? 'active' : ''} 
        onClick={() => setSeccion('Inventario')}
      >
        Inventario
      </button>
      <button 
        className={seccion === 'Incidencias' ? 'active' : ''} 
        onClick={() => setSeccion('Incidencias')}
      >
        Incidencias
      </button>
    </aside>
  );
};