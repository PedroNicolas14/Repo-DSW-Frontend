import './encabezado.css';

export function Encabezado() {
  return (
    <header className="encabezado">
      <nav className="menu">
        <ul className="menu-lista">
          <li>
            <a href="#inicio" className="logo">Niguta™</a>
          </li>
          <li>
            <a href="#explorar" className="boton-explorar">Explorar</a>
          </li>
          <li>
            <form className="form-busqueda">
              <input
                type="text"
                placeholder="Buscar..."
                className="barra-busqueda"
              />
              <button type="submit" className="boton-busqueda">Buscar</button>
            </form>
          </li>
          <li>
            <a href="#usuario" className="boton-usuario">Ingresar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}