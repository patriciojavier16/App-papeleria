import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { E404Component } from './componentes/e404/e404.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactosComponent,
    E404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
