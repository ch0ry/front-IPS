import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private Api_url = "";

  constructor(private http: HttpClient) { }

  getPacientes(): Observable <Paciente[]> {
    return this.http.get<Paciente[]>(this.Api_url);
  }

  getPacientesPorId(id: number): Observable<Paciente[]>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Paciente>(Api_url);
  }

  crearPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.Api_url, paciente);
  }

  actualizarPaciente(paciente: Paciente): Observable<Paciente> {
    const url = `${this.apiUrl}/${paciente.id}`;
    return this.http.put<Paciente>(Api_url, paciente);
  }
  eliminarPaciente(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(Api_url);
  }

  }
}
