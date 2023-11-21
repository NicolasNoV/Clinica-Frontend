import { HorarioDTO } from "./horario-dto";

export interface MedicoDTO {

    cedula: string,
    nombre: string,
    correo: string,
    telefono: number,
    ciudad: string,
    password: string,
    especialidad: string,
    url_Foto: string,
    horarios: HorarioDTO[]
}