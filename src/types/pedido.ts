import { typeUsuario } from "./usuario.js";
import { typeEnvio } from "./envio.js";
import { typeIndumentaria } from "./indumentaria.js";

export interface typeDetallePedido {
  indumentaria: typeIndumentaria['_id'];
  cantidad: number;
  precioUnitario: number;
}

export interface typePago {
  _id: string;
  fechaPago: Date;
  monto: number;
  metodoPago: "Tarjeta" | "MercadoPago";    
  estado: "Pendiente" | "Aprobado" | "Rechazado";
}

export interface typePedido {
  _id: string;
  usuario: typeUsuario['_id'];
  fecha: Date;    
  estado: "pendiente" | "completado" | "cancelado";
  detallePedido: typeDetallePedido[];
  pago?: typePago;
  envio?: typeEnvio;
}