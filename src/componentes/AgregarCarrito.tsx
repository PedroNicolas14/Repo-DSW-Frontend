import { useState } from "react";

type Indumentaria = {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  color: string;
  talle: string;
  marca: {
    _id: string;
    nombre: string;
    descripcion: string;
    logo: string;
  }
  categoria: {
    _id: string;
    nombre: string;
    descripcion: string;
  }
};

export function AgregarCarrito() {
  const [carrito, setCarrito] = useState<Indumentaria[]>([]);
  const agregarAlCarrito = (producto: Indumentaria) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item._id === producto._id);
      if (existe) {
        alert("Este producto ya está en el carrito");
        return prevCarrito;
      }
      return [...prevCarrito, producto];
    });
  };

  return { carrito, agregarAlCarrito };
}