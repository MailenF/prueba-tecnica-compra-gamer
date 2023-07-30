import {Component, OnInit} from '@angular/core';
import {Productos} from "../../interfaces/productos";
import {Subcategorias} from "../../interfaces/subcategorias";
import {ProductosService} from "../../services/productos.service";
import {CarritoComprasService} from "../../services/carrito-compras.service";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  productos: Productos[] = [];
  subcategorias: Subcategorias[] = [];
  mensaje: string = '';

  constructor(
    private productoSrv: ProductosService,
    private carritoSrv: CarritoComprasService,
    private currencyPipe: CurrencyPipe,
    ) {
  }

  ngOnInit() {
    this.getAllProductos();
    this.getSubCategorias();
    this.mostrarProductosSubcategoria();
  }

  getAllProductos() {
    this.productoSrv.obtenerProductos().subscribe((productos) => {
      this.productos = productos;
      }
    )
  }

  getSubCategorias() {
    this.productoSrv.subCategorias.subscribe((subcategorias) => {
        this.subcategorias = subcategorias;
      }
    )
  }

  mostrarProductosSubcategoria() {
    this.productoSrv.productosSubCategorias.subscribe((productos) => {
      this.productos = productos;
    });
  }

  calcularPrecioTotal(precio: number, iva: number): string | null{
    let value = precio + (precio * iva / 100);
    return this.currencyPipe.transform(value);
  }

  filtrarSubCategoris(id: number): string {
    let nombreSubcategoria = '';

    this.subcategorias.filter(value => {
      if (value.id === id) {
        nombreSubcategoria = value.nombre
      }
    })
    return nombreSubcategoria;
  }

  agregarProducto(producto: Productos) {
    this.carritoSrv.agregarProducto(producto);
  }
}
