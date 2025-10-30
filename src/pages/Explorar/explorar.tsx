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
    <section className="explorar-page">
      <h2>Explora los diferentes productos</h2>
      <div className="indumentarias-lista">
        {indumentarias.map((item) => (
          <div className="indumentaria-item" onClick={() => itemDetalle(item)} style={{ cursor: "pointer" }}>
            <Preview
              key={item._id}
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
        <div className="VerDetalle-overlay" onClick={closeVerDetalle}>
          <VerDetalle item={selectedItem} onClose={closeVerDetalle} />
        </div>
        )}
      </div>
    </section>
  );
}
