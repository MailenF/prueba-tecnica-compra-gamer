import {Component, OnInit} from '@angular/core';
import {CarritoComprasService} from "../services/carrito-compras.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

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
