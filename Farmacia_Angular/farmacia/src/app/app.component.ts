import { Component, OnInit } from '@angular/core';
import { Sucursal } from './sucursal/sucursal.model';
import { HttpClient } from '@angular/common/http';
import { SucursalService } from './sucursalService';
import { Observable } from 'rxjs';
import { LoggingService } from './LoggingService.service';
import { DataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Farmacia Farma Sama';
  //sucursales:Sucursal[]=[new Sucursal(1,"Av.Solano","Matriz","2809301",-78.421,-1.542)];
  // sucursales: Sucursal[] = [];


  // constructor(private dataService: DataService, private sucursalService: SucursalService, private LoggingService: LoggingService, private httpClient: HttpClient) {

  // }
  ngOnInit(): void {
 
  }
}
