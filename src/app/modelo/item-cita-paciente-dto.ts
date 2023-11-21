import { MedicoCitasPacienteDTO } from "./medico-citas-paciente-dto";

export interface ItemCitaPacienteDTO {
    fechaCreacion: Date;
  fechaCita: Date;
  motivo: string;
  medicoCitasPacienteDTO: MedicoCitasPacienteDTO;
  estadoCita: string;
}