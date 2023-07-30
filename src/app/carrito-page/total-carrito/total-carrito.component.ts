import {Component, OnInit} from '@angular/core';
import {CarritoComprasService} from "../../services/carrito-compras.service";
import {map} from "rxjs";
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-total-carrito',
  templateUrl: './total-carrito.component.html',
  styleUrls: ['./total-carrito.component.css']
})
export class TotalCarritoComponent implements OnInit {

  total: string | null = '';

  constructor(
    private carritoSrv: CarritoComprasService,
    private currencyPipe: CurrencyPipe,
  ) {}

  ngOnInit() {
    this.calcularTotal();
  }

  calcularTotal() {
    this.carritoSrv.productos.pipe(map(productos => {
      return productos.reduce((prev, actual) => prev + (actual.precio + (actual.precio * actual.iva / 100)), 0)
    })).subscribe( value => {
      this.total = this.currencyPipe.transform(value);
    })
  }

}
