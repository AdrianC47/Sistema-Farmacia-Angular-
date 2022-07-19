import { Component, Input, OnInit } from '@angular/core';
import { ProductoSucursal } from '../listar-productos/productos-Sucursal.model';
import { ProductoSucursalService } from '../listar-productos/productoSucursalservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-prod-cat',
  templateUrl: './listar-prod-cat.component.html',
  styleUrls: ['./listar-prod-cat.component.css']
})
export class ListarProdCatComponent implements OnInit {

  productos: ProductoSucursal[] = [];
  @Input() producto: ProductoSucursal;
  nombreCategoria: string;
  nombreSucursal: string;

  constructor(private productoSucursalService: ProductoSucursalService,  private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {

    this.nombreCategoria=this.route.snapshot.params['categoria']
    this.nombreSucursal = this.route.snapshot.params['sucursal']
    if(this.nombreCategoria!= null && this.nombreSucursal!= null){
      this.productoSucursalService.obtenerProductosCategoria(this.nombreSucursal,this.nombreCategoria).subscribe(
        (productos: ProductoSucursal[]) =>{
          this.productos=productos;
          this.productoSucursalService.setProductosSucursal(this.productos);
          console.log('lo has logrado?' + this.productos);
        }
      )
    }
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
