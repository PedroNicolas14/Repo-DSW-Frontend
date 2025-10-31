import { createContext, useContext, useState, ReactNode } from "react";
import { typeUsuario } from "../types/usuario";


type UsuarioContextType = {
  usuario: typeUsuario | null;
  setUsuario: (u: typeUsuario | null) => void;
};

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<typeUsuario | null>(null);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) throw new Error("useUsuario debe usarse dentro de UsuarioProvider");
  return context;
};