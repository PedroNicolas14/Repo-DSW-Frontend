import { api } from "./api.js";

export const obtenerIndumentarias = () => api.get("/indumentarias");
export const guardarIndumentaria = (indumentaria: any) => api.post("/indumentarias", indumentaria);
