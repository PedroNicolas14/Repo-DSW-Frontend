import { useState, useEffect } from "react";
import { obtenerIndumentarias } from "../../services/indumentaria.service.js";
import "./explorar.css";
import { useCarrito } from "../../context/CarritoContext";
import { typeIndumentaria } from "../../types/indumentaria.js";
import { Preview } from "../../components/Preview.js";


export function Explorar() {
  const [indumentarias, setIndumentarias] = useState<typeIndumentaria[]>([]);
  const [selectedItem, setSelectedItem] = useState<typeIndumentaria | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    obtenerIndumentarias()
      .then((res) => setIndumentarias(res.data))
      .catch((error) => console.error("Error al obtener indumentarias", error));
  }, []);

   const handleItemClick = (item: typeIndumentaria) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="explorar-page">
      <h2>Explora los diferentes productos</h2>
      <div className="indumentarias-lista">
        {indumentarias.map((item) => (
          <div className="indumentaria-item" onClick={() => handleItemClick(item)} style={{ cursor: "pointer" }}>
            <Preview
              key={item._id}
              imagen={item.imagen}
              nombre={item.nombre}
              marca={item.marca.nombre}
              categoria={item.categoria.nombre}
              precio={item.precio}
              item={item}
              />
          </div>
        ))}
        {modalOpen && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedItem.imagen} alt={selectedItem.nombre} className="indumentaria-imagen-modal" />
            <h3>{selectedItem.categoria.nombre} {selectedItem.marca.nombre} {selectedItem.nombre}</h3>
            <p><strong className="texto-ars">ARS</strong><strong className="precio-item">${selectedItem.precio}</strong></p>
            <p><strong>Color:</strong> {selectedItem.color}</p>
            <p><strong>Talle:</strong> {selectedItem.talle}</p>
            <p><strong>Stock disponible:</strong> {selectedItem.stock}</p>
            <p><strong>Nombre de la Marca:</strong> {selectedItem.marca.nombre}</p>
            <p><strong>Descripción de la Marca:</strong> {selectedItem.marca.descripcion}</p>
            <p><strong>Nombre de la Categoría:</strong> {selectedItem.categoria.nombre}</p>
            <p><strong>Descripción de la Categoría:</strong> {selectedItem.categoria.descripcion}</p>
            <button onClick={closeModal} className="boton-cerrar">Cerrar</button>
            <button onClick={()=> agregarAlCarrito(selectedItem)}  className="boton-comprar">Agregar al Carrito</button>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
