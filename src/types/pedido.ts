import { typeUsuario } from "./usuario.js";
import { typeEnvio } from "./envio.js";

export interface typePago {
  _id: string;
  fechaPago: Date;
  monto: number;
  metodoPago: "Tarjeta" | "MercadoPago";    
  estado: "Pendiente" | "Aprobado" | "Rechazado";
}

export interface typePedido {
  _id: string;
  usuario: typeUsuario;
  fecha: Date;    
  estado: "pendiente" | "completado" | "cancelado";
  pago?: typePago;
  envio?: typeEnvio;
}