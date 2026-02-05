import { useAuth } from "../auth/authContext.js";

export function Encabezado() {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="encabezado">
      <nav className="menu">
        <ul className="menu-lista-izquierda">
          <li className="menu-lista-item">
            <a href="/" className="menu-lista-item-link">Inicio</a>
          </li>
          <li className="menu-lista-item">
            <a href="/explorar" className="menu-lista-item-link">Explorar</a>
          </li>
          { isAuthenticated && user?.rol === 'admin' &&
          <li className="menu-lista-item">
            <a href="/admin" className="menu-lista-item-link">Administrar</a>
          </li>
          }
          <li className="menu-lista-item">
            <form className="form-busqueda">
              <input type="text" className="form-barra-busqueda" placeholder="Buscar..."/>
              <button type="submit" className="form-boton-busqueda"></button>
            </form>
          </li>
        </ul>
        <ul className="menu-lista-derecha">
          <li className="menu-lista-item menu-izquierda">
            <a href="/carrito" className="menu-lista-item-link">🛒</a>
          </li>
          <li className="menu-lista-item menu-izquierda">
            { isAuthenticated ? (
            <>
              <a href="/usuario" className="menu-lista-item-link">Hola, {user?.nombre}!</a>
            </>
              ) : (
              <a href="/login" className="menu-lista-item-link">Iniciar Sesión</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
      );
}
