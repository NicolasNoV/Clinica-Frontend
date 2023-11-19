import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  registroPacienteDTO: RegistroPacienteDTO;
  
  ciudades:string[];
  epss:string[];
  tipoSangres:string[];
  archivos!:FileList;

  constructor(){
  this.registroPacienteDTO = new RegistroPacienteDTO();
  this.ciudades = [];
  this.cargarCiudades();
  this.epss = [];
  this.cargarEpss();
  this.tipoSangres = [];
  this.cargarTipoSangres();
  }

  public registrar(){
    console.log(this.registroPacienteDTO);
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroPacienteDTO);
      }else{
      console.log("Debe cargar una foto");
      }
  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  private cargarCiudades(){
    this.ciudades.push("Armenia");
    this.ciudades.push("Calarcá");
    this.ciudades.push("Pereira");
    this.ciudades.push("Manizales");
    this.ciudades.push("Medellín");
  }

  private cargarEpss(){
    this.epss.push("Sanitas");
    this.epss.push("NuevaEPS");
  }

  private cargarTipoSangres(){
    this.tipoSangres.push("O+");
    this.tipoSangres.push("O-");
    this.tipoSangres.push("A+");
    this.tipoSangres.push("A-");
    this.tipoSangres.push("B+");
    this.tipoSangres.push("B-");
    this.tipoSangres.push("AB+");
    this.tipoSangres.push("AB-");
  }
  
  public onFileChange(event:any){
    
    if (event.target.files.length > 0) {
    const files = event.target.files;
    console.log(files);
    }
  }

}


