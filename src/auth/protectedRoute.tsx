import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { JSX } from "react/jsx-runtime";

type Props = {
  children: JSX.Element;
  roles?: ("admin" | "cliente")[];
};

export const ProtectedRoute = ({ children, roles }: Props) => {
  const { isAuthenticated, user } = useAuth();

  // no logueado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // logueado pero sin rol permitido
  if (roles && user && !roles.includes(user.rol)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
