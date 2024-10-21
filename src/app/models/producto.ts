export interface Producto {
  "_id":          string;
  nombre:         string;
  descripcion:    string;
  categoria:      string[];
  imageUrl:       string[];
  precio_venta:   number;
  precio_regular: number;
  slug?:           string;
  create_at:      Date;
  update_at?: Date;
}
