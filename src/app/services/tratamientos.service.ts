import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from 'src/app/models/tratamiento.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientosService {
  private Api_url = "/api/tratamiento";

  constructor(private http: HttpClient) { }

  getTratamientos(): Observable <Tratamiento[]> {
    const url = `${this.Api_url}/getAllTratamiento`;
    return this.http.get<Tratamiento[]>(url);
  }

  getTratamientosPorId(id: number): Observable<Tratamiento>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Tratamiento>(url);
  }

  crearTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>(this.Api_url, tratamiento);
  }

  actualizarTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.put<Tratamiento>(this.Api_url, tratamiento);
  }
  eliminarTratamiento(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(url);
  }




}
