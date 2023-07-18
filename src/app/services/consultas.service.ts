import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from 'src/app/models/consultas.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private Api_url = "/api/consulta";

  constructor(private http: HttpClient) { }

  getConsultas(): Observable <Consulta[]> {
    return this.http.get<Consulta[]>(this.Api_url);
  }

  getConsultaPorId(id: number): Observable<Consulta>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Consulta>(url);
  }

  crearConsulta(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.Api_url, consulta);
  }

  actualizarConsulta(consulta: Consulta): Observable<Consulta> {
    const url = `${this.Api_url}/${consulta.id}`;
    return this.http.put<Consulta>(this.Api_url, consulta);
  }
  eliminarConsulta(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(this.Api_url);
  }


}
