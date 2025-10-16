import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "./explorar.css";

type Indumentaria = {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  color: string;
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

export function Explorar() {
  const [indumentarias, setIndumentarias] = useState<Indumentaria[]>([]);

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
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>Categoria: {item.categoria.nombre}</p>
            <p>Marca: {item.marca.nombre}</p>
            <p>Color: {item.color}</p>
            <p>Stock: {item.stock}</p>
            <button className="boton-comprar">Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}
