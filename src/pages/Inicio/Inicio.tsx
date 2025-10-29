import './inicio.css';
import { Preview } from '../../components/Preview';
import { useEffect, useState } from 'react';
import { obtenerIndumentarias } from '../../services/indumentaria.service.js';
import { typeIndumentaria } from '../../types/indumentaria.js';

export function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState<typeIndumentaria[]>([]);
  const [productos, setProductos] = useState<typeIndumentaria[]>([]);

  useEffect(() => {
    obtenerIndumentarias()
      .then((res) => setProductos(res.data))
      .catch((error) => {console.error('Error al obtener productos:', error);
      });
  }, []);

  useEffect(() => {
    const destacados = productos.filter(producto => producto.stock > 25);
    setProductosDestacados(destacados);
  }, [productos]);

  return (
    <section className="inicio">
      <h2 className="subtitulo">Productos destacados</h2>
      <div className="imagenes-productos">
        {productosDestacados.map((producto) => (
          <div className="indumentaria-item">
          <Preview
            key={producto._id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            marca={producto.marca.nombre}
            categoria={producto.categoria.nombre}
            precio={producto.precio}
            item={producto}
          />
          </div>
        ))}
      </div>
    </section>
  );
}