import { Persona } from 'src/app/models/persona.models';

export class Medico extends Persona {
  override id: number;
  idPersona: number;
  especialidad: string;
  persona: Persona;

  constructor(
    id: number,
    idPersona: number,
    especialidad: string,
    persona: Persona
  ) {
    super(persona.id, persona.documento, persona.nombre, persona.telefono, persona.fechaNacimiento, persona.fechaDesde, persona.fechaHasta);
    this.id = id;
    this.idPersona = idPersona;
    this.especialidad = especialidad;
    this.persona = persona;
  }
}
