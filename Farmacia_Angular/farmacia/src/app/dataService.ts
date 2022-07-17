import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { Sucursal } from './sucursal/sucursal.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    cargarSucursales(): Observable<any> {
        console.log(this.httpClient.get('http://localhost:8080/sucursales'))
        return this.httpClient.get('http://localhost:8080/sucursales');

    }

    cargarCategorias(): Observable<any> {
        console.log(this.httpClient.get('http://localhost:8080/categorias'))
        return this.httpClient.get('http://localhost:8080/categorias');

    }

    cargarProductos(): Observable<any> {
        console.log(this.httpClient.get('http://localhost:8080/producto/'))
        console.log('pepe')
        return this.httpClient.get('http://localhost:8080/producto/');

    }

    cargarProductosporSucursal(sucursal: string): Observable<any> {
        console.log(this.httpClient.get('http://localhost:8080/producto/' + sucursal))
        console.log('objeto en get' + sucursal)
        return this.httpClient.get('http://localhost:8080/producto/' + sucursal);

    }

    // cargarProductosporSucursal(sucursal:string):Observable<any>{
    //     console.log(this.httpClient.get('http://localhost:8080/producto/'+sucursal))
    //     return this.httpClient.get('http://localhost:8080/producto/'+sucursal);

    // }

    // //Guarda todo el arreglo de personas 
    // guardarSucursales(sucursales: Sucursal[]) {
    //     this.httpClient.put('https://listado-personas.firebaseio.com/datos.json', sucursales)
    //         .subscribe(
    //             (response) => {
    //                 console.log("resultado guardar Sucursales: " + response);
    //             },
    //             (error) => console.log("Error en guardar Sucursales: " + error)
    //         );
    // }


    // modificarPersona(index:number, persona: Persona){
    //     let url: string;
    //     url = 'https://listado-personas.firebaseio.com' + '/datos/' + index + '.json';
    //     console.log("url de modificarPersona:" + url);
    //     this.httpClient.put( url, persona)
    //         .subscribe(
    //             (response) => {
    //                 console.log("resultado modificar Persona: " + response);
    //             },
    //             (error) => console.log("Error en modificar Persona: " + error)
    //         );
    // }

    // eliminarPersona(index:number){
    //     let url: string;
    //     url = 'https://listado-personas.firebaseio.com' + '/datos/' + (index) + '.json';
    //     console.log("url de eliminarPersona:" + url);
    //     this.httpClient.delete( url)
    //         .subscribe(
    //             (response) => {
    //                 console.log("resultado eliminar Persona: " + response);
    //             },
    //             (error) => console.log("Error en eliminar Persona: " + error)
    //         );
    // }

}

