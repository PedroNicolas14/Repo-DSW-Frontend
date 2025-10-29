
export function Encabezado() {
  return (
<header className="encabezado">
  <nav className="menu-lista">
    <div className="izquierda">
      <a href="/" className="logo"><strong>Niguta</strong>™</a>
      <a href="/explorar" className="boton-explorar">Explorar</a>
    </div>

    <form className="form-busqueda">
      <input type="text" className="barra-busqueda" placeholder="Buscar..."/>
      <button className="boton-busqueda">Buscar</button>
    </form>

    <div className="derecha">
      <a href="/carrito" className="boton-carrito">🛒</a>
      <a href="/usuario" className="boton-usuario">Ingresar</a>
    </div>
  </nav>
</header>
  );
}
