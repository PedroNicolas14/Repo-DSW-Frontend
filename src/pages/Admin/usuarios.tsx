import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../services/usuario.service";
import { typeUsuario } from "../../types/usuario.js";

export function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState<typeUsuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await obtenerUsuarios();
        setUsuarios(response.data);
      } catch (err) {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario:typeUsuario) => (
            <tr key={usuario._id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}