import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { AgendaService } from "../../services/agenda.service";
import { MedicosService } from "../../services/medicos.service";
import { ConsultasService } from "../../services/consultas.service";
import { Router } from '@angular/router';
import { MatTable } from "@angular/material/table";

//models

import { Medico } from "../../models/medico.models";
import {Consulta, ConsultaGet} from "../../models/consultas.models";
import { Agenda } from "../../models/agenda.models";
import {PersonasService} from "../../services/personas.service";
import {MedicoGet} from "../../models/medicoGet.models";
import {Cita} from "../../models/cita.models";
import {PacientesService} from "../../services/pacientes.service";
import {Paciente, PacienteGet} from "../../models/paciente.models";
import {SedesService} from "../../services/sedes.service";
import { Sede } from 'src/app/models/sede.models';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent{

}
