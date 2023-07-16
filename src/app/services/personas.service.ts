import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/models/persona.models.ts'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private Api_url = "https://real-hasta-la-muerte.up.railway.app/rhlm/api/persona/getAll";

  constructor(private http: HttpClient) { }
  getPersonas(): Observable <Persona[]> {
       return this.http.get<Persona[]>(this.Api_url);
     }

  getPersonasPorId(id: number): Observable<Persona[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Persona[]>(this.Api_url);
    }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.Api_url, persona);
    }

  updatePersona(persona: Persona): Observable<Persona> {
    const url = `${this.Api_url}/${persona.id}`;
    return this.http.put<Persona>(Api_url, persona);
    }
  deletePersona(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(Api_url);

     }

}
