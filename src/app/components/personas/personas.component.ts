import { Component, OnInit, Inject } from '@angular/core';

import { Persona } from "../../models/persona.models";
import { Paciente } from "../../models/paciente.models";
import { Medico } from "../../models/medico.models";

import { PersonasService} from "../../services/personas.service";
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MedicosService} from "../../services/medicos.service";
import {PacientesService} from "../../services/pacientes.service";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit{

  constructor(private service: PersonasService, private medicoService: MedicosService, private pacienteService: PacientesService, private router: Router, public dialog: MatDialog) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDateP = new Date(currentYear - 100, 0, 1);
    this.maxDateP = new Date();

    this.minDate = this.minDateP;
    this.maxDate = this.maxDateP;

    this.maxDateM = new Date(currentYear - 18, 0, 1);
    this.minDateM = new Date(currentYear - 100, 0, 1);
  }

  openDialog(persona: Persona) {
    this.dialog.open(EditDialogPersona, {
      data : persona
    });
  }

  ngOnInit(): void {
    this.getPersonas();
  }


  private getPersonas() {
    this.service.getPersonas().subscribe((data) => {
      this.personas = data;
    });
  }

  public createPersona() {
    this.persona.fechaDesde = new Date();
    this.persona.fechaHasta = new Date();
    this.service.createPersona(this.persona).subscribe((data) => {
      this.getPersonas();
      this.persona = data;
      this.personaId = this.persona.id;
        if (this.role == 1){
          this.medico.idPersona = this.personaId;
          this.medicoService.crearMedico(this.medico).subscribe();
        }
        else{
          this.paciente.idPersona = this.personaId;
          this.pacienteService.crearPaciente(this.paciente).subscribe();
        }
      alert("¡Se creó con éxito la persona!");
    });
  }

  persona: Persona = new Persona();
  personaId: number;
  personas: Persona[];


  paciente: Paciente = new Paciente();

  medico: Medico = new Medico();

  columns: string[] = ['id', 'nombre', 'documento', 'fechaNac', 'edit'];

  minDateP: Date;
  maxDateP: Date;
  minDateM: Date;
  maxDateM: Date;
  minDate: Date;
  maxDate: Date;

  updateDate(role: number){
    console.log(role);
    if (role == 1){
      this.minDate = this.minDateM;
      this.maxDate = this.maxDateM;
    }
    else {
      this.minDate = this.minDateP;
      this.maxDate = this.maxDateP;
    }
  }

  public deletePersona(personaId: number) {
    this.medicoService.getMedicos().subscribe((data) => {
      for (let med of data) {
        if (med.idPersona == personaId) {
          console.log(med.idPersona);
          this.medicoService.eliminarMedico(personaId).subscribe(                                                                                                                                                                                                                                                                                                                      );
          break;
        }
      }

    });

    this.pacienteService.getPacientes().subscribe((data) => {
      for (let pac of data) {
        if (pac.idPersona == personaId) {
          console.log(pac.idPersona);
          this.pacienteService.eliminarPaciente(personaId).subscribe();
          break;
        }
      }
    });

    this.service.deletePersona(personaId).subscribe();
  }

  role: number;



}

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
  styleUrls: ['./personas.component.scss'],

})
export class EditDialogPersona {

  minDate: Date;
  maxDate: Date;

  newPersona: Persona = new Persona();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Persona, private service: PersonasService,) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date();

   this.newPersona = Object.assign({}, data);

  }

  edit(persona: Persona) {
    this.service.updatePersona(persona)
    .subscribe(data=>{
      alert("¡Se actualizó con exito!");
    });
  }



}
