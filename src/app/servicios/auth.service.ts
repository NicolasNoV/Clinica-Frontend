import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroPacienteDTO } from '../modelo/registro-paciente-dto';
import { Observable } from 'rxjs';
import { LoginDTO } from '../modelo/login-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
providedIn: 'root'
})

export class AuthService {
  private authURL = "http://localhost:4200/api/auth";

  constructor(private http:HttpClient) { 

  }

  public registrarPaciente(paciente:RegistroPacienteDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/registrarse`, paciente);
  }

  public login(loginDTO:LoginDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
  }



}