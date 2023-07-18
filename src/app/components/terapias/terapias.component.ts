import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";


import { TerapiasService } from 'src/app/services/terapias.service';
import { Terapia } from 'src/app/models/terapia.models';


@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.scss'],

})
export class TerapiasComponent {

  constructor(private service: TerapiasService, public dialog: MatDialog) {}

  openDialog(terapia: Terapia) {
    this.dialog.open(EditDialogT, {
      data : terapia
    });
  }

  ngOnInit(): void {
    this.getTerapias();
  }

  private getTerapias() {
    this.service.getTerapias().subscribe((data) => {
      this.terapias = data;
    });
  }

  terapia: Terapia = new Terapia();
  terapias: Terapia[];
  columns: string[] = ['id', 'nombre', 'descripcion'];



  submit(){
    this.service.crearTerapia(this.terapia).subscribe(() => {
      alert("¡Terapia creada con éxito!");
    });
  }

}


@Component({
  selector: 'edit-dialog-t',
  templateUrl: 'edit-dialog-t.html',
  styleUrls: ['./terapias.component.scss'],
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

export class EditDialogT {

  terapia: Terapia;

  newTerapia: Terapia;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Terapia, private service: TerapiasService,) {
    this.terapia = data;

  }

  edit(terapia: Terapia) {
    this.service.actualizarTerapia(this.terapia)
    .subscribe(data=>{
      alert("Se Actualizo con Exito...!!!");
    });
  }
}