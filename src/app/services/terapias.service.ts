import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Terapia } from 'src/app/models/terapia.models.ts';

@Injectable({
  providedIn: 'root'
})
export class TerapiasService {
  private Api_url = "https://real-hasta-la-muerte.up.railway.app/rhlm/api/persona/getAll";

  constructor(private http: HttpClient){ }

  getTerapias(): Observable <Terapia[]> {
    return this.http.get<Terapia[]>(this.Api_url);
  }

  getTerapiasPorId(id: number): Observable<Terapia[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Terapia[]>(this.Api_url);
  }

  crearTerapia(terapias: Terapia): Observable<Terapia> {
    return this.http.post<Terapia>(this.Api_url, terapia);
  }

  actualizarTerapia(terapia: Terapia): Observable<Terapia> {
    const url = `${this.Api_url}/${terapia.id}`;
    return this.http.put<Terapia>(this.Api_url, terapia);
  }
  eliminarTerapia(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(this.Api_url);
  }



}
