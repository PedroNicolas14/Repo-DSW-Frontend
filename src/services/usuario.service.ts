import { api } from "./api.js";
import { typeUsuario } from "../types/usuario.js";

export const obtenerUsuarios = () => api.get("/usuarios");
export const guardarUsuario = (usuario: any) => api.post("/usuarios", usuario);



