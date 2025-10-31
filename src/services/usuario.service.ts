import { api } from "./api.js";

export const obtenerUsuarios = () => api.get("/usuarios");
export const guardarUsuario = (usuario: any) => api.post("/usuarios", usuario);



