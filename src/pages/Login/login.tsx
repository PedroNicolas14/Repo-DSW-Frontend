import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuarios } from "../../services/usuario.service";
import "../../pages/formulario.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await obtenerUsuarios();
      const usuarios = response.data;
      const usuario = usuarios.find((u: any) => u.email === email && u.contraseña === contraseña);

      if (usuario) {
        navigate("/envio");
      } else {
        alert("usuario o contraseña incorrectos");
        navigate("/usuario");
      }
    } catch (err) {
      alert("Error al iniciar sesión");
      console.error(err);
    }
  };

  return (
    <section className="formulario-page">
      <h2>Iniciar Sesión</h2>
      <form className="formulario-form" onSubmit={handleLogin}>
        <div className="form-row">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Contraseña:</label>
          <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
        </div>

        <div className="form-actions">
          <button type="submit" className="boton-registrar">Ingresar</button>
        </div>
      </form>
    </section>
  );
}