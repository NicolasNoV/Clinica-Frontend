export interface CitaMedicoCompletadaDTO {
    fechaCreacion: Date,
    fechaCita: Date,
    motivo: string,
    cedulaPaciente: string,
    estado: string,
    diagnostico: string,
    tratamiento: string,
    notasMedico: string
}