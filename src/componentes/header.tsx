import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <header className="header">
      <div className="brand">
        <div className="logo-placeholder">🚀</div>
        <h2>Dashboard</h2>
      </div>
      <div className="time">{hora}</div>
    </header>
  );
};