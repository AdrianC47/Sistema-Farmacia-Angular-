import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private ProductoService: ProductoService,private router: Router) { }

  ngOnInit(): void {

    this.ProductoService.obtenerProductos().
    subscribe(
      (productos: Producto[])=>{
        this.productos=productos;
        this.ProductoService.setProductos(this.productos);
        console.log("obtener productos por sucursal "+ this.productos);
      }
    )
    
    this.irAInicio()
  }

  irAInicio() {
    let usuario = sessionStorage.getItem('Usuario');
    if (usuario == null) {
      alert('No existe un usuario')
      this.router.navigate([''])
    }  
  }

}
