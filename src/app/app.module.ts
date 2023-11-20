import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearMedicoComponent } from './pagina/crear-medico/crear-medico.component';
import { ActualizarMedicoComponent } from './pagina/actualizar-medico/actualizar-medico.component';
import { EliminarMedicoComponent } from './pagina/eliminar-medico/eliminar-medico.component';
import { ListarMedicosComponent } from './pagina/listar-medicos/listar-medicos.component';
import { ObtenerMedicoComponent } from './pagina/obtener-medico/obtener-medico.component';
import { ListarPqrsComponent } from './pagina/listar-pqrs/listar-pqrs.component';
import { VerDetallePqrsComponent } from './pagina/ver-detalle-pqrs/ver-detalle-pqrs.component';
import { ResponderPqrsComponent } from './pagina/responder-pqrs/responder-pqrs.component';
import { CambiarEstadoPqrsComponent } from './pagina/cambiar-estado-pqrs/cambiar-estado-pqrs.component';
import { ListarCitasComponent } from './pagina/listar-citas/listar-citas.component';
import { SubirComponent } from './pagina/subir/subir.component';
import { EliminarComponent } from './pagina/eliminar/eliminar.component';
import { ListarCitasPendientesComponent } from './pagina/listar-citas-pendientes/listar-citas-pendientes.component';
import { AtenderCitaComponent } from './pagina/atender-cita/atender-cita.component';
import { AgenderDiaLibreComponent } from './pagina/agender-dia-libre/agender-dia-libre.component';
import { ListarCitasRealizadasComponent } from './pagina/listar-citas-realizadas/listar-citas-realizadas.component';
import { EditarPerfilComponent } from './pagina/editar-perfil/editar-perfil.component';
import { EliminarCuentaComponent } from './pagina/eliminar-cuenta/eliminar-cuenta.component';
import { LinkRecuperacionComponent } from './pagina/link-recuperacion/link-recuperacion.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import { AgendarCitasComponent } from './pagina/agendar-citas/agendar-citas.component';
import { ListarMedicosEspecialidadComponent } from './pagina/listar-medicos-especialidad/listar-medicos-especialidad.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { ListarPqrsPacienteComponent } from './pagina/listar-pqrs-paciente/listar-pqrs-paciente.component';
import { ListarCitasPacienteComponent } from './pagina/listar-citas-paciente/listar-citas-paciente.component';
import { FiltrarCitasPorFechaComponent } from './pagina/filtrar-citas-por-fecha/filtrar-citas-por-fecha.component';
import { FiltrarCitasPorMedicoComponent } from './pagina/filtrar-citas-por-medico/filtrar-citas-por-medico.component';
import { VerDetalleCitaComponent } from './pagina/ver-detalle-cita/ver-detalle-cita.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { ListarCitaPacienteComponent } from './pagina/listar-cita-paciente/listar-cita-paciente.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearMedicoComponent,
    ActualizarMedicoComponent,
    EliminarMedicoComponent,
    ListarMedicosComponent,
    ObtenerMedicoComponent,
    ListarPqrsComponent,
    VerDetallePqrsComponent,
    ResponderPqrsComponent,
    CambiarEstadoPqrsComponent,
    ListarCitasComponent,
    SubirComponent,
    EliminarComponent,
    ListarCitasPendientesComponent,
    AtenderCitaComponent,
    AgenderDiaLibreComponent,
    ListarCitasRealizadasComponent,
    EditarPerfilComponent,
    EliminarCuentaComponent,
    LinkRecuperacionComponent,
    CambiarPasswordComponent,
    AgendarCitasComponent,
    ListarMedicosEspecialidadComponent,
    CrearPqrsComponent,
    ListarPqrsPacienteComponent,
    ListarCitasPacienteComponent,
    FiltrarCitasPorFechaComponent,
    FiltrarCitasPorMedicoComponent,
    VerDetalleCitaComponent,
    GestionPqrsComponent,
    ListarCitaPacienteComponent,
    GestionCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
