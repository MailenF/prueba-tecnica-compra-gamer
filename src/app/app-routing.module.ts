import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductosPageComponent} from "./productos-page/productos-page.component";
import {SobreNosotrosPageComponent} from "./sobre-nosotros-page/sobre-nosotros-page.component";
import {ContactoPageComponent} from "./contacto-page/contacto-page.component";
import {InicioSesionPageComponent} from "./inicio-sesion-page/inicio-sesion-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'productos', component: ProductosPageComponent},
  {path: 'sobre-nosotros', component: SobreNosotrosPageComponent},
  {path: 'contacto', component: ContactoPageComponent},
  {path:'inicio-sesion', component: InicioSesionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
