import { api } from "./api.js";
import { typeIndumentaria } from "../types/indumentaria.js";

export const obtenerIndumentarias = () => api.get("/indumentarias");
export const guardarIndumentaria = (indumentaria: typeIndumentaria) => api.post("/indumentarias", indumentaria);
