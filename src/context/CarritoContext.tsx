import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Indumentaria = {
  _id: string;
  nombre: string;
  precio: number;
  stock: number;
  color: string;
  talle: string;
  imagen: string;
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
  cantidad?: number;
};

type CarritoContextType = {
  carrito: Indumentaria[];
  agregarAlCarrito: (producto: Indumentaria) => void;
  quitarDelCarrito: (id: string) => void;
  vaciarCarrito: () => void;
  aumentarCantidad: (id: string) => void;
  disminuirCantidad: (id: string) => void;
};

const CarritoContext = createContext<CarritoContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // 🔹 1. Inicializamos desde localStorage (si existe)
  const [carrito, setCarrito] = useState<Indumentaria[]>(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  // 🔹 2. Cada vez que cambia el carrito → lo guardamos
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto: Indumentaria) => {
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
    localStorage.removeItem("carrito"); // limpiar también el storage
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