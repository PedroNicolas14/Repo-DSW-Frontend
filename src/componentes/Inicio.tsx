import './inicio.css';
import { Preview } from './preview';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState([]);

  useEffect(() => {
    // Llama a una ruta como /api/productos/destacados o similar
    axios.get('http://localhost:3000/api/productos/destacados')
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
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
            precio={producto.precio}
          />
        ))}
      </div>
    </section>
  );
}