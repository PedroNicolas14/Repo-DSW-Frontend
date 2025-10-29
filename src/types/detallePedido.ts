import { typeIndumentaria } from "./indumentaria.js";
import { typePedido } from "./pedido.js";

export interface typeDetalle {
  _id: string;
  indumentaria: typeIndumentaria;
  pedido: typePedido;
  cantidad: number;
  precioUnitario: number;
}