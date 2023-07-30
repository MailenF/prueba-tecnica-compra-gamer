import { Injectable } from '@angular/core';
import {Productos} from "../interfaces/productos";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  private carritoProductos: Productos[] = [];
  private _carritoProductos$: BehaviorSubject<Productos[]>;

  constructor() {
    this._carritoProductos$ = new BehaviorSubject<Productos[]>([]);
  }

  agregarProducto(producto: Productos) {
    this.carritoProductos.push(producto);
    this._carritoProductos$.next(this.carritoProductos);
  }

  get productos(): Observable<Productos[]> {
    return this._carritoProductos$.asObservable();
  }

  eliminarProducto(index: number) {
    this.carritoProductos.splice(index, 1);
    this._carritoProductos$.next(this.carritoProductos);
  }
}
