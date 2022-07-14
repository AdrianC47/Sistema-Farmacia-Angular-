import { Component, Input, OnInit } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from './productoService';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];
  @Input() producto: Producto;
  @Input() indice: number;

  constructor(private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.ProductoService.obtenerProductos().
    subscribe(
      (productos: Producto[])=>{
        this.productos=productos;
        this.ProductoService.setProductos(this.productos);
        console.log("obtener productos por sucursal "+ this.productos);
      }
    )
  }

}
