export interface typeDireccion {
  _id: string;
  calle: string;
  nro: number;
  piso?: string;
  depto?: string;
  codPostal: string;
  ciudad: string;
}

export interface typeEnvio {
  _id: string;
  direccion: typeDireccion;
  fechaEnvio: Date;
  fechaEntregaEstimada: Date;
  fechaEntregaReal?: Date;
  estado: "pendiente" | "enviado" | "entregado" | "cancelado";
}