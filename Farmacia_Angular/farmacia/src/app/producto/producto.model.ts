import { Categoria } from '../categorias/categoria.model';
export class Producto {

    constructor(public id: number, public descripcion: String, public nombre: String, public precio: number, public categoria: Categoria) { }
}