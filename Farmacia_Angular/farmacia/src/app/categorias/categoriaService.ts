import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Categoria } from "./categoria.model";
import { DataService } from '../dataService';

@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class CategoriaService{
    categorias: Categoria[]=[];

    constructor(private dataService: DataService){

    }

    setCategorias(categorias: Categoria[]){
        this.categorias=categorias;
    }

    obtenerCategorias(){
        return this.dataService.cargarCategorias();
    }
}