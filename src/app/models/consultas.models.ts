import { Sede } from 'src/app/models/sede.models.ts';
import { Paciente } from 'src/app/models/paciente.models.ts';
import { Medico } from 'src/app/models/medico.models.ts';
import { Tratamiento } from 'src/app/models/tratamiento.models.ts';

export class Consulta {
  id: number;
  idSede: number;
  idPaciente: number;
  idMedico: number;
  idTratamiento: number;
  fecha: Date;
  sintomas: string;
  diagnostico: string;
  sede: Sede;
  paciente: Paciente;
  medico: Medico;
  tratamiento: Tratamiento;

  constructor(
    id: number,
    idSede: number,
    idPaciente: number,
    idMedico: number,
    idTratamiento: number,
    fecha: Date,
    sintomas: string,
    diagnostico: string,
    sede: Sede,
    paciente: Paciente,
    medico: Medico,
    tratamiento: Tratamiento
  ) {
    this.id = id;
    this.idSede = idSede;
    this.idPaciente = idPaciente;
    this.idMedico = idMedico;
    this.idTratamiento = idTratamiento;
    this.fecha = fecha;
    this.sintomas = sintomas;
    this.diagnostico = diagnostico;
    this.sede = sede;
    this.paciente = paciente;
    this.medico = medico;
    this.tratamiento = tratamiento;
  }
}
