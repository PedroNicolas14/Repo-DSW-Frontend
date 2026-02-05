import { useAuth } from "../../auth/authContext.js";

export function Usuario() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="usuario-pagina">
      <h2>Perfil de Usuario</h2>
      { isAuthenticated ? (
        <div className="usuario-info">
          <p><strong>Nombre:</strong> {user?.nombre}</p>
          <p><strong>Apellido:</strong> {user?.apellido}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <button onClick={logout} className="boton-logout">Cerrar Sesión</button>
        </div>
      ) : (
        <p>Por favor, inicia sesión para ver tu perfil.</p>
      )}
    </div>
  );
}
