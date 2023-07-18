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
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit{

  @ViewChild(MatTable) table!: MatTable<any>;

  columns: string[] = ['dia', 'horaInicio', 'horaFin', 'consulta', 'edit'];

  agenda: Agenda = new Agenda();
  agendas: Agenda[];

  citas: Cita[] = [];

  /*
  Se guardan los ids de las citas para hacer la relacion con las consultas
  Es como si quisiera hacer
  SELECT * FROM CONSULTAS
  WHERE ID_AGENDA IN (SELECT ID FROM AGENDA WHERE ID_MEDICO = MEDICO_SELECCIONADO);
  */
  idsConsulta: number[];

  /*
  Toca llamar los medicos para seleccionar cual es el que queremos ver si tiene citas
  Se selecciona uno y ese pasa a la variable medico
  */
  medico: MedicoGet;
  medicos: MedicoGet[];
  /*
  Lo mismo para las consultas, toca llamar todas las consultas, y como el back es precario
  o sea, no hay forma de traerme solo las consultas que esten ocupadas por el medico seleccionado
  me toca traermelas todas y filtrarlas a nivel de front (No recomendado, increiblemente lento)
  */
  consultas: Consulta[];


  constructor(private service: AgendaService, private medicoService: MedicosService, private consultaService: ConsultasService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {

    this.getAllMedicos();

  }

  public getMedico(){
    this.medicoService.getMedicoPorId(2).subscribe((data) => {
      this.medico = data;
    });
  }

  public getAllCitas(){

    this.citas = [];

    this.service.getAgenda(this.medico.id).subscribe((data) =>
    {
      this.agendas = data;
      for (let element of data){
        if (element.idConsulta != null){
          this.consultaService.getConsultaPorId(element.idConsulta).subscribe((data) =>
          {
            let cita: Cita = new Cita();
            cita.agenda = element;
            cita.medico = this.medico;
            cita.consulta = data;
            this.citas.push(cita);
            this.table.renderRows();
          });
        }else {
          let cita: Cita = new Cita();
          cita.agenda = element;
          cita.medico = this.medico;
          this.citas.push(cita);
          this.table.renderRows();
        }

      }
    });
  }

 public createCita(){

  }

  public deleteCita(id: number){

    this.service.eliminarAgenda(id).subscribe(()=>
    {
      alert("¡Se eliminó con éxito!");
    });
  }

  private getAllMedicos(){
    this.medicoService.getMedicos().subscribe((data) =>
    {
      this.medicos = data;
    });
  }

  openDialog(agenda: Agenda, medico: MedicoGet) {
    this.dialog.open(EditDialogAgenda, {
      data : {agenda: agenda,
        medico: medico}
    });
  }

  openDialogShowConsulta(consulta: Consulta) {
    this.dialog.open(EditDialogShowConsulta, {
      data : consulta
    });
  }

}


@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
  styleUrls: ['./agenda.component.scss'],
})
export class EditDialogAgenda {

  agenda: Agenda = new Agenda();

  medico: MedicoGet = new MedicoGet();

  paciente: PacienteGet = new PacienteGet();
  pacientes: PacienteGet[];

  consulta: Consulta = new Consulta();

  sede: Sede = new Sede();


  constructor(@Inject(MAT_DIALOG_DATA) public data: {agenda: Agenda, medico: MedicoGet}, private service: AgendaService, private servicePacientes: PacientesService, private serviceConsultas: ConsultasService, private serviceSedes: SedesService) {

    this.agenda = Object.assign({}, data.agenda);
    this.medico = Object.assign({}, data.medico);
    console.log(this.agenda);

    this.servicePacientes.getPacientes().subscribe((data) => {
      this.pacientes = data;
    });
  }

  public createConsulta(){
    let consulta: Consulta = new Consulta();
    consulta.idSede = this.sede.id;
    consulta.idPaciente = this.paciente.id;
    consulta.idMedico = this.medico.id;
    consulta.fecha = this.agenda.dia;

    this.serviceConsultas.crearConsulta(consulta).subscribe(() => {
      this.serviceConsultas.getConsultas().subscribe((data) =>
      {
        for (let con of data) {
          if (con.fecha == consulta.fecha){
            console.log("wip");
          }
        }
      })
    });

    this

  }
  edit(agenda: Agenda) {

    this.service.actualizarAgenda(agenda)
    .subscribe(data=>{
      alert("¡Se actualizó con exito!");
    });

  }

  public deleteConsulta() {

    console.log("Its executing");

    let agenda: Agenda = new Agenda();

    agenda.id = this.agenda.id;
    agenda.dia = this.agenda.dia;
    agenda.horaInicio = this.agenda.horaInicio;
    agenda.horaFin = this.agenda.horaFin;
    agenda.idConsulta = null;
    agenda.idMedico = this.medico.id;

    this.edit(agenda);

  }

}

@Component({
  selector: 'edit-dialog-consulta',
  templateUrl: 'edit-dialog-consulta.html',
  styleUrls: ['./agenda.component.scss'],
})
export class EditDialogShowConsulta {

  columns: string[] = ["idSede", "idPaciente", "idMedico", "idTratamiento", "fecha", "sintomas", "diagnostico"];

    consulta: ConsultaGet;


    constructor(@Inject(MAT_DIALOG_DATA) public data: ConsultaGet) {

      this.consulta = data;

    }
  }
