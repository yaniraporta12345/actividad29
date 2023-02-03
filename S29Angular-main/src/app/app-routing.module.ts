import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

import { ProductosComponent } from './core/productos/productos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
