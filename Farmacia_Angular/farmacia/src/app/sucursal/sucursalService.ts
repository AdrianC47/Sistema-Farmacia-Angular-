import { Sucursal } from './sucursal.model';
import { LoggingService } from '../LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class SucursalService{
    sucursales:Sucursal[]=[
        new Sucursal(1,"Av.Solano","Matriz","2809301",-78.421,-1.542),
        new Sucursal(2,"Av. de las Americas","Bodega","324243",-243.421,-1.3)
    ];

    saludar = new EventEmitter<number>();
    constructor(private ServicioLogin: LoggingService) {

    }
    agregarSucursal(sucursal:Sucursal){
        this.ServicioLogin.enviarMensajeAConsola("Agregamos una sucursal  " + sucursal.nombreClave);
        this.sucursales.push(sucursal);
        
    }
}