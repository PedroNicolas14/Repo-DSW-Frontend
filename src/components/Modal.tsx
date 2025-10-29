import { useCarrito } from "../context/CarritoContext";
import { typeIndumentaria } from "../types/indumentaria.js";
import { useState, useEffect } from "react";

interface ModalProps {
  item: typeIndumentaria;
  onClose: () => void;
}
export function Modal({ item, onClose }: ModalProps) {
  const [selectedItem, setSelectedItem] = useState<typeIndumentaria | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    setSelectedItem(item);
    setModalOpen(true);
  }, [item]);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    onClose();
  }


  return (
        modalOpen && selectedItem && (
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
        )
  );
}