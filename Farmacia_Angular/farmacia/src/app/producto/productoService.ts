import { Injectable } from "@angular/core";
import { DataService } from "../dataService";
import { Producto } from "./producto.model";

@Injectable() //esta anotacion se usa para indicar que voy a inyectar un servicio dentro de otro
export class ProductoService{
    productos: Producto[]=[];

    constructor(private dataService: DataService){

    }

    setProductos(productos: Producto[]){
        this.productos=productos;
    }
    obtenerProductos(){
        return this.dataService.cargarProductos();
    }

    obtenerProductosporSucursal(sucursal: String){
        return this.dataService.cargarProductosporSucursal(sucursal);
    }
}