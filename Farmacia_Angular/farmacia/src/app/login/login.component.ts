import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from './usuario.model';
import { SucursalService } from '../sucursales/sucursalService';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const usuario = form.value.usuario;
    const contrasenia = form.value.contrasenia;
    this.usuario.usuario = usuario;
    this.usuario.contrasenia = contrasenia;

    if (this.usuario != null) {
      console.log('entro el ' + this.usuario.usuario)
      this.loginService.verificarUsuario(this.usuario).subscribe(
        (data) => {
          sessionStorage.setItem("Usuario", this.usuario.usuario) //se le manda como variable de sesion
          alert("Datos correctos")
          this.router.navigate(['Inicio'])
        }, error => alert('Datos Incorrectos')
      )
    }
  }

}
