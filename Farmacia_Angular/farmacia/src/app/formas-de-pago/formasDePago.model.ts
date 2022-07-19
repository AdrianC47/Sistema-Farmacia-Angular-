import { TipoPago } from "./TipoPago.enum";

export class FormaPago {

    constructor(public id: number, public TipoPago: TipoPago, public nombreTitular: string, public numeroTarjeta: string,
        public vuelto: number, public meses: number) { }
}