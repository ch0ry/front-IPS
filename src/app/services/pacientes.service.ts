import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Paciente, PacienteGet} from 'src/app/models/paciente.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private Api_url = "/api/paciente";

  constructor(private http: HttpClient) { }

  getPacientes(): Observable <PacienteGet[]> {
    const url = `${this.Api_url}/getAllPaciente`;
    return this.http.get<PacienteGet[]>(url);
  }

  getPacientePorId(id: number): Observable<Paciente>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Paciente>(url);
  }

  crearPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.Api_url, paciente);
  }

  actualizarPaciente(paciente: Paciente): Observable<Paciente> {
    const url = `${this.Api_url}/${paciente.id}`;
    return this.http.put<Paciente>(url, paciente);
  }
  eliminarPaciente(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(url);
  }


}
