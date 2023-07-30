export interface Productos {
  destacado: number,
  garantia: number,
  id_producto: number,
  id_subcategoria: number,
  iva: number,
  nombre: string,
  precio: number,
  stock: number,
  vendible: number
  imagenes: [{
    id_producto_imagen: number
    nombre: string,
    orden: number
  }]
}
