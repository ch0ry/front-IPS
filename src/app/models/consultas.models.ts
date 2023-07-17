import { Sede } from 'src/app/models/sede.models';
import { Paciente } from 'src/app/models/paciente.models';
import { Medico } from 'src/app/models/medico.models';
import { Tratamiento } from 'src/app/models/tratamiento.models';

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
}
