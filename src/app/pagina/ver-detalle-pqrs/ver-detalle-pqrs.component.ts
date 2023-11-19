import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPQRSDTO } from 'src/app/modelo/item-pqrsdto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './ver-detalle-pqrs.component.html',
  styleUrls: ['./ver-detalle-pqrs.component.css']
})

  export class VerDetallePqrsComponent {
    codigoPqrs: string = "";
    pqrs: ItemPQRSDTO | undefined;
    constructor(private route:ActivatedRoute, private pqrsService: PqrsService) {
      this.route.params.subscribe( params => {
      this.codigoPqrs = params['codigo'];

      let pqrsConsultado = pqrsService.obtener(parseInt(this.codigoPqrs));

      if( pqrsConsultado != undefined ){
        this.pqrs = pqrsConsultado;
      }

      });
    }
  }