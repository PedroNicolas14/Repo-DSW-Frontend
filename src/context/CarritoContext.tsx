import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { typeIndumentaria } from "../types/indumentaria.js";

type CarritoContextType = {
  carrito: typeIndumentaria[];
  agregarAlCarrito: (producto: typeIndumentaria) => void;
  quitarDelCarrito: (id: string) => void;
  vaciarCarrito: () => void;
  aumentarCantidad: (id: string) => void;
  disminuirCantidad: (id: string) => void;
};

const CarritoContext = createContext<CarritoContextType | null>(null);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<typeIndumentaria[]>(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto: typeIndumentaria) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item._id === producto._id);
      if (existe) {
        return prev.map((item) =>
          item._id === producto._id && item.cantidad! < item.stock
            ? { ...item, cantidad: item.cantidad! + 1 }
            : item,
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const quitarDelCarrito = (id: string) => {
    setCarrito((prev) => prev.filter((item) => item._id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  const aumentarCantidad = (id: string) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item._id === id && item.cantidad! < item.stock
          ? { ...item, cantidad: item.cantidad! + 1 }
          : item
      )
    );
  }

  const disminuirCantidad = (id: string) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item._id === id && item.cantidad! > 1
          ? { ...item, cantidad: item.cantidad! - 1 }
          : item
      )
    );
  };

return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito, aumentarCantidad, disminuirCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}