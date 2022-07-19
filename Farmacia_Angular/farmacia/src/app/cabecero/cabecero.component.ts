import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  irALogin() { this.router.navigate([""]) }


  irAInicio() {
    let usuario = sessionStorage.getItem('Usuario');
    if (usuario == null) {
      alert('No existe un usuario')
      this.irALogin()
    }  else {
    this.router.navigate(["Inicio"])
    }
  }
  irASucursales() {
    let usuario = sessionStorage.getItem('Usuario');
    if (usuario == null) {
      alert('No existe un usuario')
      this.irALogin()
    } else {
      this.router.navigate(["Sucursales"])
    }
  }
  irACategorias() {
    let usuario = sessionStorage.getItem('Usuario');
    if (usuario == null) {
      alert('No existe un usuario')
      this.irALogin()
    } else {
      this.router.navigate(["categorias"])
    }
  }
  irAProductos() {
    let usuario = sessionStorage.getItem('Usuario');
    if (usuario == null) {
      alert('No existe un usuario')
      this.irALogin()
    } else { 
    this.router.navigate(["producto"])
    }
  }
  irAFormasDePago() {
    let usuario = sessionStorage.getItem('Usuario');
    if (usuario == null) {
      alert('No existe un usuario')
      this.irALogin()
    } else { 
    this.router.navigate(["FormasDePago", usuario])
    }
  }

  CerrarSesion() {
    sessionStorage.removeItem('Usuario')
    this.router.navigate([""])
  }
}
