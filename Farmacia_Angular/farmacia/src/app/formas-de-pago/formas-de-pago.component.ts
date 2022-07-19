import { Component, Input, OnInit } from '@angular/core';
import { FormaPago } from './formasDePago.model';
import { FormaDePagoService } from './formaDePagoService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formas-de-pago',
  templateUrl: './formas-de-pago.component.html',
  styleUrls: ['./formas-de-pago.component.css']
})
export class FormasDePagoComponent implements OnInit {

  formasDePago: FormaPago[] = [];
  @Input() formaDePago: FormaPago;
  nombreUsuario: string;

  constructor(private formaDePagoService: FormaDePagoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreUsuario = this.route.snapshot.params['nombreUsuario']
    if (this.nombreUsuario != null) {
      this.formaDePagoService.obtenerFormasDePago(this.nombreUsuario).subscribe(
        (formasDePago: FormaPago[]) => {
          this.formasDePago = formasDePago;
          this.formaDePagoService.setFormasdePago(this.formasDePago);
          console.log('Lo has logrado?' + this.formasDePago);
        }
      )
    }
    }

  }
