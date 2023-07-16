import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from 'src/app/models/consulta.models.ts';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private Api_url = "https://real-hasta-la-muerte.up.railway.app/rhlm/api/persona/getAll";

  constructor(private http: HttpClient) { }

  getConsultas(): Observable <Consulta[]> {
    return this.http.get<Consulta[]>(this.Api_url);
  }

  getConsultasPorId(id: number): Observable<Consulta[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Consulta[]>(this.Api_url);
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
