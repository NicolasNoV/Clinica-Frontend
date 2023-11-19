import { Injectable } from '@angular/core';
import { ItemPQRSDTO } from '../modelo/item-pqrsdto';
import { CrearPQRSDTO } from '../modelo/crear-pqrsdto';

@Injectable({
  providedIn: 'root'
})
  export class PqrsService {
  
    pqrs: ItemPQRSDTO[];
    constructor() {
      this.pqrs = [];
      this.pqrs.push({ codigo: 1, estado: 'EN_PROCESO', motivo: 'Solicitud de información', fecha: '2023-10-12', nombrePaciente: 'Carlos' });
      this.pqrs.push({ codigo: 2, estado: 'EN_PROCESO', motivo: 'Solicitud de cambio de fecha', fecha: '2023-09-29', nombrePaciente: 'Juan' });
      this.pqrs.push({ codigo: 3, estado: 'RESUELTO', motivo: 'Solicitud de información', fecha: '2023-11-01', nombrePaciente: 'Maria' });
      this.pqrs.push({ codigo: 4, estado: 'EN_PROCESO', motivo: 'Queja sobre médico', fecha: '2023-09-07', nombrePaciente: 'Laura' });
    }

    public listar(): ItemPQRSDTO[] {
      return this.pqrs;
    }

    public obtener(codigo: number): ItemPQRSDTO | undefined{
      return this.pqrs.find(pqrs => pqrs.codigo == codigo);
    }

    public crear(pqrs: CrearPQRSDTO){
      let codigo = this.pqrs.length + 1;

      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });

      this.pqrs.push({ codigo: codigo, estado: 'EN_PROCESO', motivo: pqrs.motivo, fecha: fechaFormateada, nombrePaciente: 'Carlos' });
    }
  }