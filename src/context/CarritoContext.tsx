import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  };
  categoria: {
    _id: string;
    nombre: string;
    descripcion: string;
  };
};

type CarritoContextType = {
  carrito: Indumentaria[];
  agregarAlCarrito: (producto: Indumentaria) => void;
  quitarDelCarrito: (id: string) => void;
  vaciarCarrito: () => void;
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
        alert("Este producto ya está en el carrito");
        return prev;
      }
      return [...prev, producto];
    });
  };

  const quitarDelCarrito = (id: string) => {
    setCarrito((prev) => prev.filter((item) => item._id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito"); // limpiar también el storage
  };
return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}
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