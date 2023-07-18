import {Agenda} from "./agenda.models";
import {Consulta, ConsultaGet} from "./consultas.models";
import {MedicoGet} from "./medicoGet.models";

export class Cita {
  agenda: Agenda;
  consulta: Consulta;
  medico: MedicoGet;
}

export class CitaDisplayCons{
  consulta: ConsultaGet;
  agenda: Agenda;
}