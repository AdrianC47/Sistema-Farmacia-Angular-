import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalService } from './sucursalService';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './LoggingService.service';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './dataService';
import { SucursalesComponent } from './sucursales/sucursales.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SucursalComponent,
    ProductoComponent,
    CarritoComponent,
    PedidoComponent,
    CategoriaComponent,
    LoginComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SucursalService,LoggingService, DataService ],// se añade aqui mi proveedor de mi servicio para no estar añadiendo en cada clase
  bootstrap: [AppComponent]
})
export class AppModule { }
