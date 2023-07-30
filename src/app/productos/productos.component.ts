import {Component, OnInit, ViewChild} from '@angular/core';
import {Subcategorias} from "../interfaces/subcategorias";
import {ProductosService} from "../services/productos.service";
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  showFiller = false;
  subcategorias: Subcategorias[] = [];
  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;

  constructor(private productoSrv: ProductosService) {
   }

  ngOnInit() {
    this.getSubCategorias();
    this.productoSrv.subCategoriasFilter();
  }

  getSubCategorias() {
    this.productoSrv.subCategorias.subscribe((subcategorias) => {
        this.subcategorias = subcategorias;
      }
    )
  }

  elegirSubcategoria(id: number) {
    this.productoSrv.filtrarPorSubcategoria(id);
  }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
