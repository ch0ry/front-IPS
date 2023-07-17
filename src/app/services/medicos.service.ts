import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from 'src/app/models/medico.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private Api_url = "/api/medico";

  constructor(private http: HttpClient) { }

  getMedicos(): Observable <Medico[]> {
    const url = `${this.Api_url}/getAllMedico`;
    return this.http.get<Medico[]>(url);
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
  eliminarMedico(id: number): Observable<Medico> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<Medico>(url);
  }


}
