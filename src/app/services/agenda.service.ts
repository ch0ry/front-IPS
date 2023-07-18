import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agenda } from 'src/app/models/agenda.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private Api_url = "/api/agenda";

  constructor(private http: HttpClient) { }

  getAgenda(idMedico: number): Observable <Agenda[]> {
    const url = `${this.Api_url}/getAllAgenda?idMedico=${idMedico}`;
    return this.http.get<Agenda[]>(url);
  }

  getAgendaPorId(id: number): Observable<Agenda>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Agenda>(url);
  }

  crearAgenda(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.Api_url, agenda);
  }

  actualizarAgenda(agenda: Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(this.Api_url, agenda);
  }
  eliminarAgenda(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(url);
  }


}
