import { Component, OnInit } from '@angular/core';
import { Sucursal } from './sucursal/sucursal.model';
 
import { SucursalService } from './sucursal/sucursalService';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  titulo = 'Listado de Sucursales';
  //sucursales:Sucursal[]=[new Sucursal(1,"Av.Solano","Matriz","2809301",-78.421,-1.542)];
  sucursales: Sucursal[]=[];

  constructor(private sucursalService:SucursalService, private LoggingService:LoggingService){

  }
  ngOnInit(): void {
    this.sucursales = this.sucursalService.sucursales;//igualamos el arreglo del atrbituo vacion con el del servicio
  }
}
