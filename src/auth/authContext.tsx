import { createContext, useContext, useState } from "react";
import { loginRequest, logout as logoutService } from "./auth.service";
import { typeUsuario } from "../types/usuario.js";

type AuthContextType = {
  user: typeUsuario | null;
  token: string | null;
  login: (email: string, contraseña: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<typeUsuario | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const login = async (email: string, contraseña: string) => {
    const { token, usuario } = await loginRequest(email, contraseña);

    setUser(usuario);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(usuario));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    logoutService();
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
};
