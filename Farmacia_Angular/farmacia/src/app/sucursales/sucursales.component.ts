import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../sucursal/sucursal.model';
import { SucursalService } from './sucursalService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  sucursales: Sucursal[] = [];

  constructor(private sucursalService: SucursalService, private router: Router) { }

  ngOnInit(): void {

    this.sucursalService.obtenerSucursales().subscribe
      ((sucursales: Sucursal[]) => {
        this.sucursales = sucursales;
        this.sucursalService.setSucursales(this.sucursales);
        console.log("obtener sucursales subscriber:" + this.sucursales);
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
