import './app.css';

export function App() {
  return (
    <section className="encabezado">
      <h1 className = "titulo">Bienvenido a Niguta</h1>
      <nav className="menu">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#comprar">Comprar</a></li>
          <li><a href="#usuario">Usuario</a></li>
        </ul>
      </nav>
    </section>
  );
}