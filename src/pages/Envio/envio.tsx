import { useNavigate } from "react-router-dom";
import "../../pages/formulario.css";

export function Envio() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pago");
  }

  return (
    <section className="formulario-page">
      <h2>Formulario de Envío</h2>
      <form className="formulario-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Dirección:</label>
          <input type="text" required />
        </div>

        <div className="form-row">
          <label>Ciudad:</label>
          <input type="text" required />
        </div>

        <div className="form-row">
          <label>Código Postal:</label>
          <input type="text" required />
        </div>

        <div className="form-actions">
          <button type="submit" className="boton-registrar">Continuar</button>
        </div>
      </form>
    </section>
  );
}