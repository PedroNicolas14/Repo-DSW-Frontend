import './inicio.css';
import { Preview } from '../../components/Preview';
import { useEffect, useState } from 'react';
import { obtenerIndumentarias } from '../../services/indumentaria.service.js';
import { typeIndumentaria } from '../../types/indumentaria.js';
import { Modal } from '../../components/Modal';

export function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState<typeIndumentaria[]>([]);
  const [productos, setProductos] = useState<typeIndumentaria[]>([]);
  const [selectedItem, setSelectedItem] = useState<typeIndumentaria | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleItemClick = (item: typeIndumentaria) => {
    setSelectedItem(item);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  }

  return (
    <section className="inicio">
      <h2 className="subtitulo">Productos destacados</h2>
      <div className="imagenes-productos">
        {productosDestacados.map((producto) => (
          <div className="indumentaria-item" onClick={() => handleItemClick(producto)} style={{ cursor: "pointer" }} key={producto._id}>
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
        {modalOpen && selectedItem && (
        <Modal item={selectedItem} onClose={closeModal} />
        )}
      </div>
    </section>
  );
}