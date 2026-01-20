

export const AdminPanel = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Selecciona una opción del menú para comenzar.</p>
        <div className="admin-menu">
          <a href="/admin/usuarios" className="admin-link">Gestión de Usuarios</a>
          <a href="/admin/indumentarias" className="admin-link">Gestión de Indumentarias</a>
          <a href="/admin/pedidos" className="admin-link">Gestión de Pedidos</a>
        </div>  
    </div>
  );
}
