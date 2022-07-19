import { Component, Input, OnInit } from '@angular/core';
import { Sucursal } from '../sucursal/sucursal.model';
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoriaService';
import { SucursalService } from '../sucursales/sucursalService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [];
  @Input() categoria: Categoria;
  sucursales: Sucursal[]=[];
  @Input() sucursal: Sucursal;
  @Input() nombreSucursal: string;

  constructor(private categoriaService: CategoriaService, private sucursalService: SucursalService, private router: Router) { }

  ngOnInit(): void {

    this.categoriaService.obtenerCategorias().subscribe(
      (categorias: Categoria[])=>{
        this.categorias=categorias;
        this.categoriaService.setCategorias(this.categorias);
        console.log("obtener categorias  subscriber"+this.categorias);
      }
    )
    this.sucursalService.obtenerSucursales().subscribe
    ((sucursales: Sucursal[]) => {
        this.sucursales=sucursales;
        this.sucursalService.setSucursales(this.sucursales);
        console.log("obtener sucursales en las categorias:" + this.sucursales);
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
