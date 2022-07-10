import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalService } from './sucursal/sucursalService';
import { FormsModule } from '@angular/forms';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SucursalService,LoggingService],// se añade aqui mi proveedor de mi servicio para no estar añadiendo en cada clase
  bootstrap: [AppComponent]
})
export class AppModule { }
