import { api } from "./api.js";
import { typePedido } from "../types/pedido.js";

export const obtenerPedidos = () => api.get("/pedidos");
export const guardarPedido = (pedido: any) => api.post("/pedidos", pedido);
