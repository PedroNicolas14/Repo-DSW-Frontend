import './inicio.css';
import { Preview } from '../../componentes/Preview';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

type Producto = {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  marca: {
    _id: string;
    nombre: string;
    descripcion: string;
  }
  categoria: {
    _id: string;
    nombre: string;
    descripcion: string;
  }
};

export function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState<Producto[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    api
      .get('/indumentarias')
      .then((res) => setProductos(res.data))
      .catch((error) => {console.error('Error al obtener productos:', error);
      });
  }, []);

  useEffect(() => {
    const destacados = productos.filter(producto => producto.precio < 1000);
    setProductosDestacados(destacados);
  }, [productos]);

  return (
    <section className="inicio">
      <h2 className="subtitulo">Productos más destacados</h2>
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