import './inicio.css';
import { Preview } from './Preview';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Producto = {
  _id: number;
  nombre: string;
  marca: {
    _id: number;
    nombre: string;
    descripcion: string;
  }
  categoria: {
    _id: number;
    nombre: string;
    descripcion: string;
  }
  precio: number;
};

export function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState<Producto[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/indumentarias')
      .then((response) => {
        setProductosDestacados(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener productos destacados:', error);
      });
  }, []);

  return (
    <section className="inicio">
      <h2 className="subtitulo">Explora y compra productos únicos</h2>
      <div className="imagenes-productos">
        {productosDestacados.map((producto) => (
          <Preview
            key={producto._id}
            nombre={producto.nombre}
            marca={producto.marca.nombre}
            categoria={producto.categoria.nombre}
            precio={producto.precio}
          />
        ))}
      </div>
    </section>
  );
}