import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalService } from './sucursales/sucursalService';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './LoggingService.service';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './dataService';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { CategoriaService } from './categorias/categoriaService';
import { ProductoService } from './producto/productoService';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ProductoSucursalService } from './listar-productos/productoSucursalservice';
 

@NgModule({
  declarations: [
    AppComponent,
    SucursalComponent,
    ProductoComponent,
    CarritoComponent,
    PedidoComponent,
    LoginComponent,
    SucursalesComponent,
    CategoriasComponent,
    CabeceroComponent,
    CuerpoComponent,
    InicioComponent,
    FooterComponent,
    ErrorComponent,
    ListarProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SucursalService,LoggingService, DataService, CategoriaService, ProductoService, ProductoSucursalService ],// se añade aqui mi proveedor de mi servicio para no estar añadiendo en cada clase
  bootstrap: [AppComponent]
})
export class AppModule { }
