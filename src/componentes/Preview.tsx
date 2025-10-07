


export function Preview(nombre, descripcion, imagen, precio) {
  return (
    <div className="preview">
      <img src={imagen} alt={nombre} className="imagen-producto" />
      <h3 className="nombre-producto">{nombre}</h3>
      <p className="descripcion-producto">{descripcion}</p>
      <p className="precio-producto">${precio}</p>
      <button className="boton-comprar">Comprar</button>
    </div>
  );
}