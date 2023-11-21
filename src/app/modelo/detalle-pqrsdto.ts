import { RespuestaDTO } from "./respuesta-dto";

export interface DetallePQRSDTO {

    codigo: number;
  estado: string;
  motivoPQRS: string;
  nombrePaciente: string;
  nombreMedico: string;
  especialidad: string;
  fecha: Date;
  mensajes: RespuestaDTO[];
}