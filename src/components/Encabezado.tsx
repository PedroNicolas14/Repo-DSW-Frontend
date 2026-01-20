import { useAuth } from "../auth/authContext.js";

export function Encabezado() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="encabezado">
      <nav className="menu-lista">
        <div className="izquierda">
          <a href="/" className="logo"><strong>Niguta</strong>™</a>
          <a href="/explorar" className="boton-explorar">Explorar</a>
          { isAuthenticated /*&& user?.rol === 'admin'*/ &&
          <a href="/admin" className="boton-explorar">Administrador</a>
          }
        </div>

        <form className="form-busqueda">
          <input type="text" className="barra-busqueda" placeholder="Buscar..."/>
          <button className="boton-registrar">Buscar</button>
        </form>

        <div className="derecha">
          <a href="/carrito" className="boton-carrito">🛒</a>
          { isAuthenticated ? (
            <>
              <button onClick={logout} className="boton-usuario">Cerrar Sesión</button>
            </>
          ) : (
            <a href="/login" className="boton-usuario">Ingresar</a>
          )}
        </div>
      </nav>
    </header>
      );
}
