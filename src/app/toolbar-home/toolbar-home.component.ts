import {Component, OnInit} from '@angular/core';
import {CarritoComprasService} from "../services/carrito-compras.service";

//Por una falta de tiempo no pude llegar a cambiar los colores del toolbar en el CSS dependiendo del componente en el que se
//este utilizando, por eso, a pesar de que sé que no es una buena práctica, opté por tener 2 toolbar y utilizar uno para el home con sus respectivos estilos,
//y otro toolbar con otros estilos para el resto de los componentes.


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
