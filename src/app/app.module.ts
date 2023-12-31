import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageWebComponent } from './home-page/home-page-web/home-page-web.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { SobreNosotrosPageComponent } from './sobre-nosotros-page/sobre-nosotros-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { ProductosComponent } from './productos/productos.component';
import { CardProductoComponent } from './productos/card-producto/card-producto.component';
import { CarritoPageComponent } from './carrito-page/carrito-page.component';
import { CarritoPageWebComponent } from './carrito-page/carrito-page-web/carrito-page-web.component';
import { ToolbarHomeComponent } from './toolbar-home/toolbar-home.component';
import { CardCarritoComponent } from './carrito-page/card-carrito/card-carrito.component';
import { TotalCarritoComponent } from './carrito-page/total-carrito/total-carrito.component';
import { BackgroundComponent } from './home-page/background/background.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { FormRegistroComponent } from './registro-usuario/form-registro/form-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageWebComponent,
    ToolbarComponent,
    ProductosPageComponent,
    SobreNosotrosPageComponent,
    ContactoPageComponent,
    ProductosComponent,
    CardProductoComponent,
    CarritoPageComponent,
    CarritoPageWebComponent,
    ToolbarHomeComponent,
    CardCarritoComponent,
    TotalCarritoComponent,
    BackgroundComponent,
    RegistroUsuarioComponent,
    FormRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
