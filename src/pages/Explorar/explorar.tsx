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
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    api
      .get("/indumentarias")
      .then((res) => setIndumentarias(res.data))
      .catch((error) => console.error("Error al obtener indumentarias", error));
  }, []);

  return (
    <section className="explorar-page">
      <h2>Explora los diferentes productos</h2>
      <div className="indumentarias-lista">
        {indumentarias.map((item:Indumentaria) => (
          <div key={item._id} className="indumentaria-item">
            <h3>{item.categoria.nombre} {item.marca.nombre} {item.nombre}</h3>
            <a href={item.imagen} target="_blank" rel="noopener noreferrer">
              <img src={item.imagen} alt={item.nombre} className="indumentaria-imagen" />
            </a>
            <p><strong className="texto-ars">ARS</strong><strong className="precio-item">${item.precio}</strong></p>
            <button onClick={()=> agregarAlCarrito(item)}  className="boton-comprar">Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}
