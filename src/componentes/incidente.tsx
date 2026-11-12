import React from 'react';

interface IncidentProps {
  title: string;
  completed: boolean;
}

export const IncidentCard: React.FC<IncidentProps> = ({ title, completed }) => {
  return (
    <div className={`card incident-card ${completed ? 'resolved' : 'pending'}`}>
      <h3>{title}</h3>
      <p>
        Estado: <strong>{completed ? '✅ Resuelta' : '⏳ Pendiente'}</strong>
      </p>
    </div>
  );
};