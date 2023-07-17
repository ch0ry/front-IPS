import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/models/persona.models'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private Api_url = "/api/persona";

  constructor(private http: HttpClient) { }
  getPersonas(): Observable <Persona[]> {
    const url = `${this.Api_url}/getAllPersona`;
    console.log(url);
       return this.http.get<Persona[]>(url);
     }

  getPersonasPorId(id: number): Observable<Persona[]>{
    const url = `${this.Api_url}/${id}`;
    return this.http.get<Persona[]>(url);
    }

  createPersona(persona: Persona): Observable<Persona> {
    console.log(persona);
    return this.http.post<Persona>(this.Api_url, persona);
    }

  updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.Api_url, persona);
    }

  
  deletePersona(id: number): Observable<void> {
    const url = `${this.Api_url}/${id}`;
    return this.http.delete<void>(url);
  }

}
