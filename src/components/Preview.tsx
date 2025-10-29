import { useCarrito } from "../context/CarritoContext.js";
import { typeIndumentaria } from "../types/indumentaria.js";

interface PreviewProps {
  nombre: string;
  marca: string;
  categoria: string;
  imagen: string;
  precio: number;
  item: typeIndumentaria;
}

export function Preview({ nombre, marca, categoria, imagen, precio, item }: PreviewProps) {
  const { agregarAlCarrito } = useCarrito();
  return (
    <div>
      <img src={imagen} className="indumentaria-imagen"/>
      <h3 className="nombre-producto">{categoria} {marca} {nombre}</h3>
      <p><strong className="texto-ars">ARS</strong><strong className="precio-item">${precio}</strong></p>
      <button className="boton-comprar" onClick={(e) => {
                e.stopPropagation(); // evita que se abra el modal
                agregarAlCarrito(item);
        }}>Agregar al Carrito</button>
    </div>
  );
}