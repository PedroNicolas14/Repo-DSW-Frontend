import './inicio.css';
import { Preview } from '../../components/Preview';
import { useEffect, useState } from 'react';
import { obtenerIndumentarias } from '../../services/indumentaria.service.js';
import { typeIndumentaria } from '../../types/indumentaria.js';
import { VerDetalle } from '../../components/verDetalle';

export function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState<typeIndumentaria[]>([]);
  const [productos, setProductos] = useState<typeIndumentaria[]>([]);
  const [selectedItem, setSelectedItem] = useState<typeIndumentaria | null>(null);
  const [VerDetalleOpen, setVerDetalleOpen] = useState(false);

  useEffect(() => {
    obtenerIndumentarias()
      .then((res) => setProductos(res.data))
      .catch((error) => {console.error('Error al obtener productos:', error);
      });
  }, []);

  useEffect(() => {
    const destacados = productos.filter(producto => producto.categoria.nombre == "Camiseta de fútbol");
    setProductosDestacados(destacados);
  }, [productos]);

  const itemDetalle = (item: typeIndumentaria) => {
    setSelectedItem(item);
    setVerDetalleOpen(true);
  }

  const closeVerDetalle = () => {
    setVerDetalleOpen(false);
    setSelectedItem(null);
  }

  return (
    <div className="inicio">
      <h2 className="subtitulo">Productos destacados</h2>
      <section className="imagenes-productos">
        {productosDestacados.map((producto) => (
          <div className="indumentaria-item" onClick={() => itemDetalle(producto)} style={{ cursor: "pointer" }} key={producto._id}>
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
        {VerDetalleOpen && selectedItem && (
        <VerDetalle item={selectedItem} onClose={closeVerDetalle} />
        )}
      </section>
    </div>
  );
}