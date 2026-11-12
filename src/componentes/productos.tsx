import React from 'react';

interface ProductProps {
  title: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductProps> = ({ title, price, image }) => {
  return (
    <div className="card product-card">
      <img src={image} alt={title} width="60" />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      {/* Renderizado condicional para activos de alto valor */}
      {price > 50 && <span className="badge high-value">Activo de Alto Valor</span>}
    </div>
  );
};