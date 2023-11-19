import { Component } from '@angular/core';
import { CrearPQRSDTO } from 'src/app/modelo/crear-pqrsdto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
selector: 'app-crear-pqrs',
templateUrl: './crear-pqrs.component.html',
styleUrls: ['./crear-pqrs.component.css']
})

export class CrearPqrsComponent {
  crearPQRSDTO: CrearPQRSDTO;
  constructor(private pqrsService: PqrsService) {
    this.crearPQRSDTO = new CrearPQRSDTO();
  }

  public crearPqrs(){
    this.pqrsService.crear(this.crearPQRSDTO);
  }
  
  public seleccionar(codigoCita:number){
    this.crearPQRSDTO.codigoCita = codigoCita;
  }
}