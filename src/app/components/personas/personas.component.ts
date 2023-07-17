import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { Persona } from "../../models/persona.models";
import { Paciente } from "../../models/paciente.models";
import { Medico } from "../../models/medico.models";

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
  ]
})
export class PersonasComponent {
  
  persona: Persona = new Persona();

  minDateP: Date;
  maxDateP: Date;
  minDateM: Date;
  maxDateM: Date;
  minDate: Date;
  maxDate: Date;


  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDateP = new Date(currentYear - 100, 0, 1);
    this.maxDateP = new Date();

    this.minDate = this.minDateP;
    this.maxDate = this.maxDateP;

    this.maxDateM = new Date(currentYear - 18, 0, 1);
    this.minDateM = new Date(currentYear - 100, 0, 1);
  }

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

  role: number;



}
