import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "./explorar.css";
import { useCarrito } from "../../context/CarritoContext";

type Indumentaria = {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  color: string;
  talle: string;
  imagen: string;
  marca: {
    _id: string;
    nombre: string;
    descripcion: string;
    logo: string;
  }
  categoria: {
    _id: string;
    nombre: string;
    descripcion: string;
  }
};

export function Explorar() {
  const [indumentarias, setIndumentarias] = useState<Indumentaria[]>([]);
  const [selectedItem, setSelectedItem] = useState<Indumentaria | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    api
      .get("/indumentarias")
      .then((res) => setIndumentarias(res.data))
      .catch((error) => console.error("Error al obtener indumentarias", error));
  }, []);

  const handleItemClick = (item: Indumentaria) => {
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
        {indumentarias.map((item:Indumentaria) => (
          <div key={item._id} className="indumentaria-item"
            onClick={() => handleItemClick(item)}
            style={{ cursor: "pointer" }}
          >
            <h3>{item.categoria.nombre} {item.marca.nombre} {item.nombre}</h3>
            <img
              src={item.imagen}
              alt={item.nombre}
              className="indumentaria-imagen"
            />
            <p><strong className="texto-ars">ARS</strong><strong className="precio-item">${item.precio}</strong></p>
              <button className="boton-comprar" onClick={(e) => {
                e.stopPropagation(); // evita que se abra el modal
                agregarAlCarrito(item);
                }}
              >
                Agregar al Carrito
              </button>
          </div>
        ))}
      </div>
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
    </section>
  );
}
