import React, { useState, useEffect } from 'react';
import { EmployeeCard } from '../componentes/carta';

interface User {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

export const Personal: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="loading">Cargando datos del servidor...</p>;

  return (
    <div className="view-container">
      <h2>Directorio de Personal</h2>
      <input
        type="text"
        placeholder="Buscar empleado por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="grid">
        {filteredUsers.map((user) => (
          <EmployeeCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
};