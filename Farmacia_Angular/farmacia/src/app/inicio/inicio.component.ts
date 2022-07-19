import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.irAInicio()
  }
  irASucursales(){
    this.router.navigate(["Sucursales"])
}

irAInicio() {
  let usuario = sessionStorage.getItem('Usuario');
  if (usuario == null) {
    alert('No existe un usuario')
    this.router.navigate([''])
  }  
}
}
