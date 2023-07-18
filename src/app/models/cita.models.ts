import {Agenda} from "./agenda.models";
import {Consulta} from "./consultas.models";
import {MedicoGet} from "./medicoGet.models";

export class Cita {
  agenda: Agenda;
  consulta: Consulta;
  medico: MedicoGet;
}