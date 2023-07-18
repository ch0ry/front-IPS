import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import { Sede } from 'src/app/models/sede.models';
import { SedesService } from 'src/app/services/sedes.service';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent {

  constructor(private service: SedesService, public dialog: MatDialog) {}

  openDialog(sede: Sede) {
    this.dialog.open(EditDialogS, {
      data : sede
    });
  }

  ngOnInit(): void {
    this.getSede();
  }

  private getSede() {
    this.service.getSedes().subscribe((data) => {
      this.sedes = data;
    });
  }

  sede: Sede = new Sede();
  sedes: Sede[];
  columns: string[] = ['id', 'nombre','direccion'];



  submit(){
    console.log(this.sede.nombre);
    console.log(this.sede.direccion);
  }



}


@Component({
  selector: 'edit-dialog-s',
  templateUrl: 'edit-dialog-s.html',
  styleUrls: ['./sedes.component.scss'],
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


export class EditDialogS {

  sede: Sede;

  newSede: Sede;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Sede, private service: SedesService,) {
    this.sede = data;

  }


  edit(sede: Sede) {
    this.service.actualizarSedes(this.sede)
    .subscribe(data=>{
      alert("Se Actualizo con Exito...!!!");
    });
  }
}