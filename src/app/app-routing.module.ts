import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarMedicoComponent } from './pagina/actualizar-medico/actualizar-medico.component';
import { AgendarCitasComponent } from './pagina/agendar-citas/agendar-citas.component';
import { AgenderDiaLibreComponent } from './pagina/agender-dia-libre/agender-dia-libre.component';
import { AtenderCitaComponent } from './pagina/atender-cita/atender-cita.component';
import { CambiarEstadoPqrsComponent } from './pagina/cambiar-estado-pqrs/cambiar-estado-pqrs.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import { CrearMedicoComponent } from './pagina/crear-medico/crear-medico.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { EliminarComponent } from './pagina/eliminar/eliminar.component';
import { EliminarCuentaComponent } from './pagina/eliminar-cuenta/eliminar-cuenta.component';
import { EliminarMedicoComponent } from './pagina/eliminar-medico/eliminar-medico.component';
import { FiltrarCitasPorFechaComponent } from './pagina/filtrar-citas-por-fecha/filtrar-citas-por-fecha.component';
import { FiltrarCitasPorMedicoComponent } from './pagina/filtrar-citas-por-medico/filtrar-citas-por-medico.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
import { GestionPacientesComponent } from './pagina/gestion-pacientes/gestion-pacientes.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LinkRecuperacionComponent } from './pagina/link-recuperacion/link-recuperacion.component';
import { ListarCitasComponent } from './pagina/listar-citas/listar-citas.component';
import { ListarCitasPacienteComponent } from './pagina/listar-citas-paciente/listar-citas-paciente.component';
import { ListarCitasPendientesComponent } from './pagina/listar-citas-pendientes/listar-citas-pendientes.component';
import { ListarCitasRealizadasComponent } from './pagina/listar-citas-realizadas/listar-citas-realizadas.component';
import { ListarMedicosComponent } from './pagina/listar-medicos/listar-medicos.component';
import { ListarMedicosEspecialidadComponent } from './pagina/listar-medicos-especialidad/listar-medicos-especialidad.component';
import { ListarPqrsComponent } from './pagina/listar-pqrs/listar-pqrs.component';
import { ListarPqrsPacienteComponent } from './pagina/listar-pqrs-paciente/listar-pqrs-paciente.component';
import { LoginComponent } from './pagina/login/login.component';
import { ObtenerMedicoComponent } from './pagina/obtener-medico/obtener-medico.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { ResponderPqrsComponent } from './pagina/responder-pqrs/responder-pqrs.component';
import { SubirComponent } from './pagina/subir/subir.component';
import { VerDetalleCitaComponent } from './pagina/ver-detalle-cita/ver-detalle-cita.component';
import { VerDetallePqrsComponent } from './pagina/ver-detalle-pqrs/ver-detalle-pqrs.component';
import { ListarCitaPacienteComponent } from './pagina/listar-cita-paciente/listar-cita-paciente.component';

const routes: Routes = [
{ path: "actualizarMedico", component: ActualizarMedicoComponent },
{ path: "agendarCitas", component: AgendarCitasComponent },
{ path: "agendarDiaLibre", component: AgenderDiaLibreComponent },
{ path: "atenderCita", component: AtenderCitaComponent },
{ path: "cambiarEstadoPQRS/:codigoPQRS:estadoPQRS", component: CambiarEstadoPqrsComponent },
{ path: "cambiarPassword", component: CambiarPasswordComponent },
{ path: "crearMedico", component: CrearMedicoComponent },
{ path: "crearPQRS", component: CrearPqrsComponent },
{ path: "editarPerfil", component: EditarPerfilComponent },
{ path: "eliminar", component: EliminarComponent },
{ path: "eliminarCuenta/:codigo", component: EliminarCuentaComponent },
{ path: "eliminarMedico/:codigo", component: EliminarMedicoComponent },
{ path: "filtrarCitasPorFecha/:fecha", component: FiltrarCitasPorFechaComponent },
{ path: "filtrarCitasPorMedico/:codigoMedico", component: FiltrarCitasPorMedicoComponent },
{ path: "gestion-pqrs", component: GestionPqrsComponent },
{ path: "gestionCitas", component: GestionCitasComponent },
{ path: "gestionMedicos", component: GestionMedicosComponent },
{ path: "gestionPacientes", component: GestionPacientesComponent },
{ path: "", component: InicioComponent },
{ path: "linkRecuperacion/:correo", component: LinkRecuperacionComponent },
{ path: "listarCitaPaciente", component: ListarCitaPacienteComponent },
{ path: "listarCitas", component: ListarCitasComponent },
{ path: "listarCitasPaciente", component: ListarCitasPacienteComponent },
{ path: "listarCitasPendientes/:codigo", component: ListarCitasPendientesComponent },
{ path: "listarCitasRealizadas/:codigoMedico", component: ListarCitasRealizadasComponent },
{ path: "listarMedicos", component: ListarMedicosComponent },
{ path: "listarMedicosEspecialidad/:especialidad", component: ListarMedicosEspecialidadComponent },
{ path: "listarPQRS/:codigoCliente", component: ListarPqrsComponent },
{ path: "listarPQRSPaciente", component: ListarPqrsPacienteComponent },
{ path: "login", component: LoginComponent },
{ path: "obtenerMedico/:codigo", component: ObtenerMedicoComponent },
{ path: "registro", component: RegistroComponent },
{ path: "responderPQRS", component: ResponderPqrsComponent },
{ path: "subir", component: SubirComponent },
{ path: "verDetalleCita", component: VerDetalleCitaComponent },
{ path: "verDetallePQRS/:codigo", component: VerDetallePqrsComponent },


];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
