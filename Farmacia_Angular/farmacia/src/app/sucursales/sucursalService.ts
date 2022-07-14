import { Sucursal } from '../sucursal/sucursal.model';
import { LoggingService } from '../LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from '../dataService';


@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class SucursalService{
    //   sucursales:Sucursal[]=[
    //       new Sucursal(1,"Av.Solano","Matriz","2809301",-78.421,-1.542),
    //     new Sucursal(2,"Av. de las Americas","Bodega","324243",-243.421,-1.3)]
    sucursales: Sucursal[] =[];
 
    
    constructor(private ServicioLogin: LoggingService, private dataService: DataService) {

    }

    setSucursales(sucursales: Sucursal[]){
        this.sucursales=sucursales;
    }
    // saludar = new EventEmitter<number>();

    // agregarSucursal(sucursal:Sucursal){
    //     this.ServicioLogin.enviarMensajeAConsola("Agregamos una sucursal  " + sucursal.nombreClave);
    //     if(this.sucursales == null){
    //         this.sucursales=[];
    //     }
    //     this.sucursales.push(sucursal);
    //     this.dataService.cargarSucursales
        
    // }

    obtenerSucursales(){
        return this.dataService.cargarSucursales();
    }
}