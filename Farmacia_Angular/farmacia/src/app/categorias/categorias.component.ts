import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoriaService';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [];
  @Input() categoria: Categoria;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe(
      (categorias: Categoria[])=>{
        this.categorias=categorias;
        this.categoriaService.setCategorias(this.categorias);
        console.log("obtener categorias  subscriber"+this.categorias);
      }
    )
  }

}
