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
      <img src={imagen} alt={`Imagen de ${categoria} ${marca} ${nombre}`} className="indumentaria-imagen"/>
      <div className="preview-info">
        <h3 className="nombre-producto" title={`${categoria} ${marca} ${nombre}`}>{categoria} {marca} {nombre}</h3>
        <p><strong className="texto-ars">ARS</strong><strong className="precio-item">${precio}</strong></p>
        
      </div>
    </div>
  );
}