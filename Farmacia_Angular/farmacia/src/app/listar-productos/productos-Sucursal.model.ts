import { Producto } from '../producto/producto.model';
import { Sucursal } from '../sucursal/sucursal.model';
export class ProductoSucursal{
    constructor(public id:number, public stock: number, public producto:Producto, public Sucursal:Sucursal){

    }

    
}