export interface typeCategoria {
  _id: string;
  nombre: string;
  descripcion: string;
}

export interface typeMarca {
  _id: string;
  nombre: string;
  descripcion: string;
  logo: string;
}

export interface typeIndumentaria {
  _id: string
  categoria: typeCategoria;
  marca: typeMarca;
  nombre: string;
  precio: number;
  stock: number;
  color: string;
  talle: string;
  imagen: string;
  cantidad?: number;
}