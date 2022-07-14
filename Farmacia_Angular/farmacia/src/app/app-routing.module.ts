import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalesComponent } from './sucursales/sucursales.component';


//declaro la variable
const routes: Routes = [
  { path: '', component: SucursalesComponent },
  
]
@NgModule({
  // declarations: [], se quitan las declaraciones y se dejan los imports
  imports: [RouterModule.forRoot(
    //se añade el concepto de routing module

    //pasamos las rutas

    routes
  )
  ],
  //tambien necesitamos exportar el componente , usamos exports
  exports: [RouterModule]
})
export class AppRoutingModule { }
