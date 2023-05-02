import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { E404Component } from './componentes/e404/e404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', component: E404Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
