import { useCarrito } from "../../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import "./carrito.css";

export function Carrito() {

  const { carrito, quitarDelCarrito, vaciarCarrito, disminuirCantidad, aumentarCantidad } = useCarrito();
  const navigate = useNavigate();
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * (item.cantidad || 0),
    0
  );
  
  const iniciarPedido = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de iniciar el pedido.");
      return;
    }
    navigate("/login");
  };

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
              <img src={item.imagen} alt={item.nombre} className="indumentaria-imagen-carrito"/>
              <p>Precio: ${item.precio}</p>
              <div className="cantidad-controles">
                <button
                  onClick={() => disminuirCantidad(item._id)}
                >
                  -
                </button>
                <span>{item.cantidad}</span>
                <button
                  onClick={() => aumentarCantidad(item._id)}
                >
                  +
                </button>
              </div>
              <div className ="subtotal">
              <strong>Subtotal: ${item.precio * (item.cantidad || 0)}</strong>
              </div>
              <p>Stock disponible: {item.stock}</p>
              <button
                onClick={() => quitarDelCarrito(item._id)}
                className="boton-eliminar"
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="total-carrito">
            <h3>
              Total: $
              {total}
            </h3>
          </div>
          <button onClick={vaciarCarrito} className="boton-limpiar">
            Limpiar Carrito
          </button>
        </div>
      )}
      <div>
        <button onClick={iniciarPedido} className="iniciar-pedido">Iniciar Pedido</button>
      </div>
    </section>
  );
}