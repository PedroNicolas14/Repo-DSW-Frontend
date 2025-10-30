import { useNavigate } from "react-router-dom";

export function Envio() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pago");
  }

  return (
    <div className="envio">
      <h2>Formulario de Envío</h2>
      <form onSubmit={handleSubmit}>
        <label>Dirección:</label>
        <input type="text" required />

        <label>Ciudad:</label>
        <input type="text" required />

        <label>Código Postal:</label>
        <input type="text" required />

        <button type="submit">Continuar</button>
      </form>
    </div>
  );
}