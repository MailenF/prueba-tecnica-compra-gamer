import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Productos } from "../interfaces/productos";
import { Subcategorias } from "../interfaces/subcategorias";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrlProductos = 'https://static.compragamer.com/test/productos.json';
  private apiUrlSubcategorias = 'https://static.compragamer.com/test/subcategorias.json';

  private productosSubCategoria: Productos[] = [];
  private _productosSubCategopris$: BehaviorSubject<Productos[]>;


  private _subcategoria$: BehaviorSubject<Subcategorias[]>;

  constructor(private http: HttpClient) {
    this._productosSubCategopris$ = new BehaviorSubject<Productos[]>([]);
    this._subcategoria$ = new BehaviorSubject<Subcategorias[]>([]);
  }

  //Obtener todos los productos de la API
  obtenerProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiUrlProductos);
  }

  //Obtener todas las subcategorias de la API
  obtenerSubcategorias(): Observable<Subcategorias[]> {
    return this.http.get<Subcategorias[]>(this.apiUrlSubcategorias);
  }

  //Dejar sólo las subcategorias que tienen productos asignados, si alguna subcategoria no coincide con algun producto no se muestra
  subCategoriasFilter() {
    const subCategorias = this._subcategoria$.getValue();

    this.obtenerProductos().subscribe((productos: Productos[]) => {
      this.obtenerSubcategorias().subscribe((subcategorias: Subcategorias[]) => {

        productos.forEach((producto) => {
          const subcategoriaEncontrada = subcategorias.find(
            (subcategoria) => subcategoria.id === producto.id_subcategoria
          );

          if (subcategoriaEncontrada) {
            const existeSubcategoria = subCategorias.some(
              (subcategoria) => subcategoria.id === subcategoriaEncontrada.id
            );

            if (!existeSubcategoria) {
              subCategorias.push(subcategoriaEncontrada);
            }
          }
        });
      });
    });
    this._subcategoria$.next(subCategorias);
  }

  get subCategorias(): Observable<Subcategorias[]> {
    return this._subcategoria$.asObservable()
  }

  //Filtrar productor por las sub-categorias
  filtrarPorSubcategoria(id: number) {
    this.obtenerProductos().subscribe((productos) => {
      productos.filter((producto) => {
        if (producto.id_subcategoria === id) {
          this.productosSubCategoria.push(producto);
          this._productosSubCategopris$.next(this.productosSubCategoria);
        }
      })
    })
    this.productosSubCategoria = [];
  }

  get productosSubCategorias(): Observable<Productos[]> {
    return this._productosSubCategopris$.asObservable()
  }

}
