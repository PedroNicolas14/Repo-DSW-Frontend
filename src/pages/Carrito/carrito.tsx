import "./carrito.css";
import { useCarrito } from "../../context/CarritoContext";

export function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();
  return (
    <section className="carrito-page">
      <h2>Tu Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="carrito-lista">
          {carrito.map((item) => (
            <div key={item._id} className="carrito-item">
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
              <button
                onClick={() => quitarDelCarrito(item._id)}
                className="boton-eliminar"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button onClick={vaciarCarrito} className="boton-limpiar">
            Limpiar Carrito
          </button>
        </div>
      )}
    </section>
  );
}