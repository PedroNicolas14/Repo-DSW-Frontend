import { useCarrito } from "../context/CarritoContext";
import { typeIndumentaria } from "../types/indumentaria.js";
import { useState, useEffect } from "react";

interface VerDetalleProps {
  item: typeIndumentaria;
  onClose: () => void;
}
export function VerDetalle({ item, onClose }: VerDetalleProps) {
  const [selectedItem, setSelectedItem] = useState<typeIndumentaria | null>(null);
  const [VerDetalleOpen, setVerDetalleOpen] = useState(false);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    setSelectedItem(item);
    setVerDetalleOpen(true);
  }, [item]);

  const closeVerDetalle = () => {
    setVerDetalleOpen(false);
    setSelectedItem(null);
    onClose();
  }


  return (
        VerDetalleOpen && selectedItem && (
        <div className="VerDetalle-overlay" onClick={closeVerDetalle}>
          <div className="VerDetalle-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedItem.imagen} alt={selectedItem.nombre} className="indumentaria-imagen-VerDetalle" />
            <h3>{selectedItem.categoria.nombre} {selectedItem.marca.nombre} {selectedItem.nombre}</h3>
            <p><strong className="texto-ars">ARS</strong><strong className="precio-item">${selectedItem.precio}</strong></p>
            <p><strong>Color:</strong> {selectedItem.color}</p>
            <p><strong>Talle:</strong> {selectedItem.talle}</p>
            <p><strong>Stock disponible:</strong> {selectedItem.stock}</p>
            <p><strong>Nombre de la Marca:</strong> {selectedItem.marca.nombre}</p>
            <p><strong>Descripción de la Marca:</strong> {selectedItem.marca.descripcion}</p>
            <p><strong>Nombre de la Categoría:</strong> {selectedItem.categoria.nombre}</p>
            <p><strong>Descripción de la Categoría:</strong> {selectedItem.categoria.descripcion}</p>
            <button onClick={closeVerDetalle} className="boton-cerrar">Cerrar</button>
            <button onClick={()=> agregarAlCarrito(selectedItem)}  className="boton-comprar">Agregar al Carrito</button>
          </div>
        </div>
        )
  );
}