import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private Api_url = "";

  constructor() { }
  getPersonas(): Observable <Persona[]> {
       return this.http.get<Persona[]>(this.Api_url);
     }

     getPersonasPorId(id: number): Observable<Persona[]>{
       const url = `${this.Api_url}/${id}`;
       return this.http.get<Persona>(Api_url);
     }

     crearPersona(persona: Persona): Observable<Persona> {
       return this.http.post<Persona>(this.Api_url, persona);
     }

     actualizarPersona(persona: Persona): Observable<Persona> {
       const url = `${this.Api_url}/${persona.id}`;
       return this.http.put<Persona>(Api_url, persona);
     }
     eliminarPersona(id: number): Observable<void> {
       const url = `${this.Api_url}/${id}`;
       return this.http.delete<void>(Api_url);
     }

}
