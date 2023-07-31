import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductosPageComponent} from "./productos-page/productos-page.component";
import {SobreNosotrosPageComponent} from "./sobre-nosotros-page/sobre-nosotros-page.component";
import {ContactoPageComponent} from "./contacto-page/contacto-page.component";
import {CarritoPageComponent} from "./carrito-page/carrito-page.component";
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'productos', component: ProductosPageComponent},
  {path: 'sobre-nosotros', component: SobreNosotrosPageComponent},
  {path: 'contacto', component: ContactoPageComponent},
  {path: 'registrar-usuario', component: RegistroUsuarioComponent},
  {path: 'carrito-de-compras', component: CarritoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
