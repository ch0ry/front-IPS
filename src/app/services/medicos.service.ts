import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from 'src/app/models/medico.models.ts';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private Api_url = "https://real-hasta-la-muerte.up.railway.app/rhlm/api/persona/getAll";

  constructor(private http: HttpClient) { }

  getMedicos(): Observable <Medico[]> {
    return this.http.get<Medico[]>(this.Api_url);
  }

  getMedicosPorId(id: number): Observable<Medico[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Medico[]>(this.Api_url);
  }

  crearMedico(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.Api_url, medico);
  }

  actualizarMedico(medico: Medico): Observable<Medico> {
    const url = `${this.Api_url}/${medico.id}`;
    return this.http.put<Medico>(this.Api_url, medico);
  }
  eliminarMedico(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(this.Api_url);
  }


}
