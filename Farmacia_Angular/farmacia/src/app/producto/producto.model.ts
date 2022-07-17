import { Categoria } from '../categorias/categoria.model';
export class Producto {

    constructor(public id: number, public descripcion: string, public nombre: string, public precio: number, public categoria: Categoria) { }
}