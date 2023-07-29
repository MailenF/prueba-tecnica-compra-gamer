import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { HttpClientModule } from '@angular/common/http';
import { InicioSesionPageComponent } from './inicio-sesion-page/inicio-sesion-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageWebComponent,
    ToolbarComponent,
    ProductosPageComponent,
    SobreNosotrosPageComponent,
    ContactoPageComponent,
    InicioSesionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
