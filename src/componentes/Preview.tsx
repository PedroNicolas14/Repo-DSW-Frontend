interface PreviewProps {
  nombre: string;
  marca: string;
  categoria: string;
  precio: number;
}

export function Preview({ nombre, marca, categoria, precio }: PreviewProps) {
  return (
    <div className="preview">
      <h3 className="nombre-producto">{categoria} {marca} {nombre}</h3>
      <p className="precio-producto">${precio}</p>
      <button className="boton-comprar">Comprar</button>
    </div>
  );
}