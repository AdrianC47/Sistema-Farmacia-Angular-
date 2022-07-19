import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { DataService } from '../dataService';
import { FormaPago } from "./formasDePago.model";

@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class FormaDePagoService{
    formasDePago: FormaPago[]=[];

    constructor(private dataService: DataService){

    }

    setFormasdePago(formasDePago: FormaPago[]){
        this.formasDePago=formasDePago;
    }

    obtenerFormasDePago(nombreUsuario: string){
        return this.dataService.cargarFormasDePago(nombreUsuario);
    }
}