import React, { useState, useEffect } from 'react';
import { ProductCard } from '../componentes/productos';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const Inventario: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Cargando datos</p>;

  return (
    <div className="view-container">
      <h2>Inventario de Activos</h2>
      <div className="grid">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
          />
        ))}
      </div>
    </div>
  );
};