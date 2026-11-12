import React from 'react';

interface EmployeeProps {
  name: string;
  email: string;
  city: string;
}

export const EmployeeCard: React.FC<EmployeeProps> = ({ name, email, city }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Ciudad:</strong> {city}</p>
    </div>
  );
};