export class Sucursal {

    // id: number = 0;
    // direccion: string = '';
    // nombreClave: string = '';
    // telefono: string = '';
    // latitud: number = 0;
    // longitud: number = 0;

    constructor(public id: number,  public direccion: string, public nombreClave: string, public telefono: string, public latitud: number, public longitud: number) {
        this.id=id;
        this.direccion=direccion;
        this.nombreClave=nombreClave;
        this.telefono=telefono;
        this.latitud=latitud;
        this.longitud=longitud
    }


}