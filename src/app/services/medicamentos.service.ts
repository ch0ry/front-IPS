import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from 'src/app/models/medicamento.models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  private Api_url = "/api/medicamento/getAllMedicamento";

  constructor(private http: HttpClient) { }

   getMedicamentos(): Observable <Medicamento[]> {
     return this.http.get<Medicamento[]>(this.Api_url);
   }

   getMedicamentosPorId(id: number): Observable<Medicamento[]>{
     const url = `${this.Api_url}/${id}`;
     return this.http.get<Medicamento[]>(this.Api_url);
   }

   crearMedicamento(medicamento: Medicamento): Observable<Medicamento> {
     return this.http.post<Medicamento>(this.Api_url, medicamento);
   }

   actualizarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
     const url = `${this.Api_url}/${medicamento.id}`;
     return this.http.put<Medicamento>(this.Api_url, medicamento);
   }
   eliminarMedicamento(id: number): Observable<void> {
     const url = `${this.Api_url}/${id}`;
     return this.http.delete<void>(this.Api_url);
   }

}