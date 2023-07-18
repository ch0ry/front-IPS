
import {Time} from "@angular/common";

export class Agenda {
  id: number;
  horaInicio: Time;
  horaFin: Time;
  dia: Date;
  idMedico: number|null;
  idConsulta: number|null;
}
