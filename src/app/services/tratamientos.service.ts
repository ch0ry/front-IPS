import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from 'src/app/models/tratamientos.models.ts';

@Injectable({
  providedIn: 'root'
})
export class TratamientosService {
  private Api_url = "https://real-hasta-la-muerte.up.railway.app/rhlm/api/persona/getAll";

  constructor(private http: HttpClient) { }

  getTratamientos(): Observable <Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.Api_url);
  }

  getTratamientosPorId(id: number): Observable<Tratamiento[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Tratamiento[]>(this.Api_url);
  }

  crearTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>(this.Api_url, tratamiento);
  }

  actualizarTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    const url = `${this.Api_url}/${tratamiento.id}`;
    return this.http.put<Tratamiento>(this.Api_url, tratamiento);
  }
  eliminarTratamiento(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(this.Api_url);
  }




}
