import {Component, OnInit} from '@angular/core';
import {Productos} from "../../interfaces/productos";
import {CarritoComprasService} from "../../services/carrito-compras.service";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css']
})
export class CardCarritoComponent implements OnInit {

  productos: Productos[] = [];

  constructor(private carritoSrv: CarritoComprasService,
              private currencyPipe: CurrencyPipe) {
  }

  ngOnInit() {
    this.carrito();
  }

  carrito() {
    this.carritoSrv.productos.subscribe((productos) => {
      this.productos = productos;
    })
  }

  calcularPrecioConIva(precio: number, iva: number): string | null {
    let value = precio + (precio * iva / 100);
    return this.currencyPipe.transform(value);
  }

  eliminarClick(index: number) {
    this.carritoSrv.eliminarProducto(index);
  }
}
