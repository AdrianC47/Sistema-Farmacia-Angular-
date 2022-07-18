import { Component, Input, OnInit } from '@angular/core';
import { ProductoSucursal } from './productos-Sucursal.model';
import { ProductoSucursalService } from './productoSucursalservice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  productos: ProductoSucursal[] = [];
  @Input() producto: ProductoSucursal;
  nombreSucursal: string;
  index: number;
  constructor(private productoSucursalService: ProductoSucursalService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreSucursal = this.route.snapshot.params['sucursal']
    if (this.nombreSucursal != null) {
      this.productoSucursalService.obtenerProductosSucursal(this.nombreSucursal).subscribe(
        (productos: ProductoSucursal[])=>{
          this.productos=productos;
          this.productoSucursalService.setProductosSucursal(this.productos);
          console.log('lo has logrado?' + this.productos);
        }
      )
    }
    }
 
}
