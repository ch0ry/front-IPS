import { Persona } from 'src/app/models/persona.models';

export class Paciente extends Persona {
  override id: number;
  idPersona: number;
  persona: Persona;

  constructor(
    id: number,
    idPersona: number,
    persona: Persona
  ) {
    super(persona.id, persona.documento, persona.nombre, persona.telefono, persona.fechaNacimiento, persona.fechaDesde, persona.fechaHasta);
    this.id = id;
    this.idPersona = idPersona;
    this.persona = persona;
  }
}
