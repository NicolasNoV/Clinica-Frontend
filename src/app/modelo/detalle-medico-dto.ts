import { HorarioDTO } from "./horario-dto";

export interface DetalleMedicoDTO {

    codigo: number;
    nombre: string;
    cedula: string;
    ciudad: string;
    especialidad: string;
    telefono: number;
    correo: string;
    urlFoto: string;
    horarios: HorarioDTO[];
}