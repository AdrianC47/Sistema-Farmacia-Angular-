import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ErrorComponent } from './error/error.component';
import { ProductoComponent } from './producto/producto.component';


//declaro la variable
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Sucursales', component: SucursalesComponent },
  { path: 'Categorias', component: CategoriasComponent },
  { path: 'Productos', component:ProductoComponent, children:[
    {path:'categoria', component:ProductoComponent},
    {path:':sucursal', component:ProductoComponent}
  ]
},
{ path: '**',component: ErrorComponent}
  
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
