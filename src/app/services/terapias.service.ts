import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Terapia } from 'src/app/models/terapia.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TerapiasService {
  private Api_url = "/api/terapia";

  constructor(private http: HttpClient){ }

  getTerapias(): Observable <Terapia[]> {
    const url = `${this.Api_url}/getAllTerapia`;
    return this.http.get<Terapia[]>(url);
  }

  getTerapiasPorId(id: number): Observable<Terapia>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Terapia>(url);
  }

  crearTerapia(terapia: Terapia): Observable<Terapia> {
    return this.http.post<Terapia>(this.Api_url, terapia);
  }

  actualizarTerapia(terapia: Terapia): Observable<Terapia> {
    return this.http.put<Terapia>(this.Api_url, terapia);
  }
  eliminarTerapia(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(url);
  }



}