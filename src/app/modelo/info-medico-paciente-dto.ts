import { HorarioDTO } from "./horario-dto";

export interface InfoMedicoPacienteDTO {
    nombreMedico: string;
    especialidad: string;
    horarioMedico: HorarioDTO[];
}