import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authContext";
import "../../pages/formulario.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, contraseña);
      navigate("/"); // redirigir a la página principal tras el login
    } catch (error) {
      alert("Error de login: Credenciales inválidas");
    }
  };
  
  return (
    <section className="formulario-page">
      <h2>Ingrese el usuario</h2>
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
          <p>¿No tienes cuenta? <a href="/registrar">Registrate aquí</a></p>
          <button type="submit" className="boton-registrar">Ingresar</button>
        </div>
      </form>
    </section>
  );
}
