import React, { useState, useEffect } from 'react';
import { IncidentCard } from '../componentes/incidente';

interface Incident {
  id: number;
  title: string;
  completed: boolean;
}

export const Incidencias: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?limit=8')
      .then((res) => res.json())
      .then((data) => {
        setIncidents(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Cargando datos del servidor...</p>;

  return (
    <div className="view-container">
      <h2>Registro de Incidencias</h2>
      <div className="grid">
        {incidents.map((inc) => (
          <IncidentCard
            key={inc.id}
            title={inc.title}
            completed={inc.completed}
          />
        ))}
      </div>
    </div>
  );
};