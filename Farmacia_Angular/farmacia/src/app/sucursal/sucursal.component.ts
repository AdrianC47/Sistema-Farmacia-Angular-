import { Component, Input, OnInit } from '@angular/core';
import { Sucursal } from './sucursal.model';
 
import { SucursalService } from './sucursalService';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent   {

  @Input() sucursal:Sucursal;
  @Input() indice: number;



  constructor(private sucursalService:SucursalService) { }

  ngOnInit(): void {
  }
  emitirSaludo(){
    this.sucursalService.saludar.emit(this.indice);
  }

}
