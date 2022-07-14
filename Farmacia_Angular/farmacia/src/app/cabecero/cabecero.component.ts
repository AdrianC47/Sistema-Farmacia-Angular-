import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irASucursales(){
      this.router.navigate(["Sucursales"])
  }
}
