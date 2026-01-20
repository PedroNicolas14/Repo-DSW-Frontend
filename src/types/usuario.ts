export interface typeUsuario {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  contraseña: string;
  telefono: string;
  rol: "cliente" | "admin";
}