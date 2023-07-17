import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatRadioButton, MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { Persona } from "../../models/persona.models";
import { Paciente } from "../../models/paciente.models";
import { Medico } from "../../models/medico.models";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import { PersonasService} from "../../services/personas.service";
import { Router } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule
  ]
})
export class PersonasComponent implements OnInit{

  constructor(private service: PersonasService, private router: Router, public dialog: MatDialog) {
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
    this.dialog.open(EditDialog, {
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

  persona: Persona = new Persona();
  personas: Persona[];
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

  submit(){
    console.log(this.persona.nombre);
    console.log(this.persona.documento);
    console.log(this.persona.telefono);
    console.log(this.persona.fechaNacimiento);
    console.log(this.role);

  }

  role: number;



}

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
  styleUrls: ['./personas.component.scss'],
  standalone: true,
  imports: [MatDialogModule,
            NgIf,
            MatDatepickerModule,
            MatFormFieldModule,
            MatRadioModule,
            MatInputModule,
            FormsModule,
            MatButtonModule
            ],
})
export class EditDialog {

  minDate: Date;
  maxDate: Date;

  persona: Persona;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Persona) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date();

    this.persona = data;
  }

  edit() {
    console.log("asda");
  }
}