import { useState, useEffect } from "react";
import { obtenerIndumentarias } from "../../services/indumentaria.service.js";
import "./explorar.css";
import { typeIndumentaria } from "../../types/indumentaria.js";
import { Preview } from "../../components/Preview.js";
import { VerDetalle } from "../../components/verDetalle.js";


export function Explorar() {
  const [indumentarias, setIndumentarias] = useState<typeIndumentaria[]>([]);
  const [selectedItem, setSelectedItem] = useState<typeIndumentaria | null>(null);
  const [VerDetalleOpen, setVerDetalleOpen] = useState(false);

  useEffect(() => {
    obtenerIndumentarias()
      .then((res) => setIndumentarias(res.data))
      .catch((error) => console.error("Error al obtener indumentarias", error));
  }, []);

   const itemDetalle = (item: typeIndumentaria) => {
    setSelectedItem(item);
    setVerDetalleOpen(true);
  };

  const closeVerDetalle = () => {
    setVerDetalleOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="explorar-page">
      <aside className="explorar-aside">
        <h3>Filtros</h3>
        <div className="explorar-filtros">
          <div className="filtro-categoria">
            <label>Categoría:</label>
            <ul>
              <li><input type="checkbox" id="categoria1" name="categoria1" value="categoria1"/>
              <label htmlFor="categoria1">Remeras</label></li>
              <li><input type="checkbox" id="categoria2" name="categoria2" value="categoria2"/>
              <label htmlFor="categoria2">Pantalones</label></li>
              <li><input type="checkbox" id="categoria3" name="categoria3" value="categoria3"/>
              <label htmlFor="categoria3">Zapatillas</label></li>
            </ul>
          </div>
          <div className="filtro-marca">
            <label>Marca:</label>
            <ul>
              <li><input type="checkbox" id="marca1" name="marca1" value="marca1"/>
              <label htmlFor="marca1">Nike</label></li>
              <li><input type="checkbox" id="marca2" name="marca2" value="marca2"/>
              <label htmlFor="marca2">Adidas</label></li>
              <li><input type="checkbox" id="marca3" name="marca3" value="marca3"/>
              <label htmlFor="marca3">Puma</label></li>
              <li><input type="checkbox" id="marca4" name="marca4" value="marca4"/>
              <label htmlFor="marca4">Lacoste</label></li>
            </ul>
          </div>
          <div className="filtro-precio">
            <label>Precio:</label>
            <ul>
              <li><input type="checkbox" id="precio1" name="precio1" value="precio1"/>
              <label htmlFor="precio1">Menos de $20000</label></li>
              <li><input type="checkbox" id="precio2" name="precio2" value="precio2"/>
              <label htmlFor="precio2">$20000 - $50000</label></li>
              <li><input type="checkbox" id="precio3" name="precio3" value="precio3"/>
              <label htmlFor="precio3">Más de $50000</label></li>
            </ul>
          </div>
          <div className="filtro-botones">
            <button className="boton-aplicar-filtros">Aplicar Filtros</button>
            <button className="boton-limpiar-filtros">Limpiar Filtros</button>
          </div>
        </div>
      </aside>
      <main className="explorar-main">
        <h2>Explora los diferentes productos</h2>
        <div className="indumentarias-lista">
          {indumentarias.map((item: typeIndumentaria) => (
            <div className="indumentaria-item" onClick={() => itemDetalle(item)} style={{ cursor: "pointer" }} key={item._id}>
              <Preview
                imagen={item.imagen}
                nombre={item.nombre}
                marca={item.marca.nombre}
                categoria={item.categoria.nombre}
                precio={item.precio}
                item={item}
                />
            </div>
          ))}
          {VerDetalleOpen && selectedItem && (
            <VerDetalle item={selectedItem} onClose={closeVerDetalle} />
          )}
        </div>
      </main>
    </div>
  );
}
