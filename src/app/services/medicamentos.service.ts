import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  private Api_url = "";

  constructor(private http: HttpClient) { }

   getMedicamentos(): Observable <Medicamento[]> {
     return this.http.get<Medicamento[]>(this.Api_url);
   }

   getMedicamentosPorId(id: number): Observable<Medicamento[]>{
     const url = `${this.Api_url}/${id}`;
     return this.http.get<Medicamento>(Api_url);
   }

   crearMedicamento(medicamento: Medicamento): Observable<Medicamento> {
     return this.http.post<Medicamento>(this.Api_url, medicamento);
   }

   actualizarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
     const url = `${this.Api_url}/${medicamento.id}`;
     return this.http.put<Medicamento>(Api_url, medicamento);
   }
   eliminarMedicamento(id: number): Observable<void> {
     const url = `${this.Api_url}/${id}`;
     return this.http.delete<void>(Api_url);
   }

}