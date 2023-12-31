import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sede } from 'src/app/models/sede.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedesService {
  private Api_url = "/api/sede";

  constructor(private http: HttpClient) { }

  getSedes(): Observable <Sede[]> {
    const url = `${this.Api_url}/getAllSede`;
    return this.http.get<Sede[]>(url);
  }

  getSedesPorId(id: number): Observable<Sede>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Sede>(url);
  }

  crearSede(sede: Sede): Observable<Sede> {
    return this.http.post<Sede>(this.Api_url, sede);
  }

  actualizarSedes(sede: Sede): Observable<Sede> {

    return this.http.put<Sede>(this.Api_url, sede);
  }
  eliminarSede(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(this.Api_url);
  }

}
