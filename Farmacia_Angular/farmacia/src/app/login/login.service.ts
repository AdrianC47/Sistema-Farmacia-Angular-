import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
 
import { DataService } from '../dataService';
import { Usuario } from "./usuario.model";

@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class LoginService{
   
  
    constructor(private dataService: DataService){

    }

 

    verificarUsuario(usuario:Usuario){
        return this.dataService.verificarUsuario(usuario);
    }
}