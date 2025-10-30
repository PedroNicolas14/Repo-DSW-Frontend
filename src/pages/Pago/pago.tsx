import { useState, useEffect } from "react";
import { useCarrito } from "../../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { guardarPedido } from "../../services/pedido.service";
import "./pago.css";
import "../Carrito/carrito.css";

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
          <div key={item._id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} className="indumentaria-imagen-carrito"/>
            <h3>{item.nombre}</h3>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio Unitario: ${item.precio}</p>
            <p>Subtotal: ${item.precio * (item.cantidad || 0)}</p>
          </div>
        ))}
        <div className="total-carrito">
          <h3>Total a Pagar: ${total}</h3>
        </div>
      </section>

      <section className="metodo-pago">
        <h2>Selecciona tu método de pago</h2>
        <form /*onSubmit={handleFinalizarPago}*/>
          <div>
            <img src="/logoTarjeta.png" alt="Tarjeta logo" className="logo"></img>
            <input type="radio" id="tarjeta" name="metodoPago" value="tarjeta" />
            <label htmlFor="tarjeta">Tarjeta de Crédito/Débito</label>
          </div>
          <div>
            <input type="radio" id="mercadoPago" name="metodoPago" value="mercadoPago" />
            <label htmlFor="mercadoPago">Mercado Pago</label>
            <img src="/Mercado_Pago.svg.png" alt="Mercado Pago Logo" className="logo" />
          </div>
          <button type="submit" className="boton-pagar">Realizar Pago</button>
        </form>
      </section>

    </div>
  );
}