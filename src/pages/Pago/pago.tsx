import { useState, useEffect } from "react";
import { useCarrito } from "../../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { guardarPedido } from "../../services/pedido.service";
import "./pago.css";

export function Pago() {

  const navigate = useNavigate();
  const { carrito, vaciarCarrito } = useCarrito();
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * (item.cantidad || 0),
    0
  );

  /*const handleFinalizarPago = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoPedido = {
      items: carrito,
      fecha: new Date().toISOString(),
      estado: "Pendiente",

    };
    guardarPedido(nuevoPedido)
      .then(() => {
        alert("Pago realizado y pedido guardado con éxito");
        vaciarCarrito();
        navigate("/");
      })
      .catch((err) => {
        alert("Error al guardar el pedido");
        console.error(err);
      });
  };*/

  return (
    <div className="pago">
      <h2>Resumen de Pago</h2>
      <section className="resumen-carrito">
        {carrito.map((item) => (
          <div key={item._id} className="resumen-item">
            <h3>{item.nombre}</h3>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio Unitario: ${item.precio}</p>
            <p>Subtotal: ${item.precio * (item.cantidad || 0)}</p>
          </div>
        ))}
        <h3>Total a Pagar: ${total}</h3>
      </section>

      <section className="metodo-pago">
        <h2>Selecciona tu método de pago</h2>
        <form>
          <div>
            <input type="radio" id="tarjeta" name="metodoPago" value="tarjeta" />
            <label htmlFor="tarjeta">Tarjeta de Crédito/Débito</label>
          </div>
          <div>
            <input type="radio" id="mercadoPago" name="metodoPago" value="mercadoPago" />
            <label htmlFor="mercadoPago">Mercado Pago</label>
          </div>
          <button type="submit">Realizar Pago</button>
        </form>
      </section>
    </div>
  );
}