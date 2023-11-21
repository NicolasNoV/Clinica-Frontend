import { HorarioDTO } from "./horario-dto";

export interface RegistroMedicoDTO {
  nombre: string;
  cedula: string;
  ciudad: string;
  especialidad: string;
  telefono: string;
  correo: string;
  password: string;
  urlFoto: string;
  horarios: HorarioDTO[];
}