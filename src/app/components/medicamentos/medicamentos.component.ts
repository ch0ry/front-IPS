import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import { Medicamento } from 'src/app/models/medicamento.models';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent {

  constructor(private service: MedicamentosService, public dialog: MatDialog) {}

  openDialog(medicamento: Medicamento) {
    this.dialog.open(EditDialogM, {
      data : medicamento
    });
  }

  ngOnInit(): void {
    this.getMedicamento();
  }

  private getMedicamento() {
    this.service.getMedicamentos().subscribe((data) => {
      this.medicamentos = data;
    });
  }

  medicamento: Medicamento = new Medicamento();
  medicamentos: Medicamento[];
  columns: string[] = ['id', 'nombre','concentracion','descripcion'];



  submit(){
    this.service.crearMedicamento(this.medicamento).subscribe(() => {
      alert("¡El medicamento fue creado con éxito!")
    })
  }

}


@Component({
  selector: 'edit-dialog-m',
  templateUrl: 'edit-dialog-m.html',
  styleUrls: ['./medicamentos.component.scss'],
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


export class EditDialogM {

  medicamento: Medicamento;

  newMedicamento: Medicamento;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Medicamento, private service: MedicamentosService,) {
    this.medicamento = data;

  }


  edit(medicamento: Medicamento) {
    this.service.actualizarMedicamento(this.medicamento)
    .subscribe(data=>{
      this.medicamento=data;
      alert("Se Actualizo con Exito...!!!");
    });
  }
}