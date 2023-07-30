import {Component, OnInit} from '@angular/core';
import {CarritoComprasService} from "../services/carrito-compras.service";

@Component({
  selector: 'app-toolbar-home',
  templateUrl: './toolbar-home.component.html',
  styleUrls: ['./toolbar-home.component.css']
})
export class ToolbarHomeComponent implements OnInit{

  cantidadProductos: number = 0;

  constructor(private carritoSrv: CarritoComprasService) {
  }

  ngOnInit() {
    this.agregarAlCarrito();
  }

  agregarAlCarrito() {
    this.carritoSrv.productos.subscribe((productos) => {
      this.cantidadProductos = productos.length;
    })
  }
}
