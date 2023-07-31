import { Injectable } from '@angular/core';
import {Usuarios} from "../interfaces/usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosRegistrados: Usuarios[] = [];
  private usuariosObtenidos: Usuarios[] = [];

  constructor() { }

  //guardando usuarios en el Local Storage
   async registrarUsuario(usuario: Usuarios): Promise<any> {
    try {
      this.usuariosRegistrados.push(usuario);
      await localStorage.setItem('usuarios', JSON.stringify(this.usuariosRegistrados));
      return 'Usuario registrado exitosamente';
    } catch (error: unknown) {
      alert(error)
    }
  }

}
