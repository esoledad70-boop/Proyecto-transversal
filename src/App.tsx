import React, { useState } from 'react';
import { Header } from './componentes/header';
import { Sidebar } from './componentes/sideBar';
import { Personal } from './componentes/personal';
import { Inventario } from './vistas/inventario';
import { Incidencias } from './vistas/incidentes';
import './styles/App.css';

export const App: React.FC = () => {
  const [seccion, setSeccion] = useState<string>('Personal');

  return (
    <div className="app-layout">
      <Header />
      <div className="body-layout">
        <Sidebar seccion={seccion} setSeccion={setSeccion} />
        <main id="panel_central">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  );
};

export default App;