import { Injectable } from "@angular/core";
import { ProductoSucursal } from './productos-Sucursal.model';
import { DataService } from '../dataService';
import { Sucursal } from '../sucursal/sucursal.model';

@Injectable()
export class ProductoSucursalService {
    productos: ProductoSucursal[] = [];
    sucursal: string;

    constructor(private dataService: DataService) {

    }
    setProductosSucursal(productos: ProductoSucursal[]) {
        this.productos = productos;
    }

    obtenerProductosSucursal(nombreSucursal: string) {
        // let producto: ProductoSucursal;
        // this.productos.forEach(objeto => {
        //     if(objeto.Sucursal.nombreClave == nombreSucursal){
        //     producto=objeto;
        //     }
        // });
        // return producto;
        return this.dataService.cargarProductosporSucursal(nombreSucursal);
    }






}