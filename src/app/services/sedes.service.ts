import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sedes } from 'src/app/models/sede.models.ts';

@Injectable({
  providedIn: 'root'
})
export class SedesService {
  private Api_url = "https://real-hasta-la-muerte.up.railway.app/rhlm/api/persona/getAll";

  constructor(private http: HttpClient) { }

  getSedes(): Observable <Sede[]> {
    return this.http.get<Sede[]>(this.Api_url);
  }

  getSedesPorId(id: number): Observable<Sede[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Sede[]>(this.Api_url);
  }

  crearSede(sede: Sede): Observable<Sede> {
    return this.http.post<Sede[]>(this.Api_url, sede);
  }

  actualizarPaciente(sede: Sede): Observable<Sede> {
    const url = `${this.Api_url}/${sede.id}`;
    return this.http.put<Sede>(this.Api_url, sede);
  }
  eliminarSede(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(this.Api_url);
  }

}
