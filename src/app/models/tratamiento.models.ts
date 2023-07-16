import { Medicamento } from 'src/app/models/medicamento.models.ts';
import { Terapia } from 'src/app/models/terapia.models.ts';

export class Tratamiento {
  id: number;
  idMedicamento: number;
  idTerapia: number;
  dosisMedicamento: string;
  cantidadTerapias: string;
  medicamento: Medicamento;
  terapia: Terapia;

  constructor(
    id: number,
    idMedicamento: number,
    idTerapia: number,
    dosisMedicamento: string,
    cantidadTerapias: string,
    medicamento: Medicamento,
    terapia: Terapia
  ) {
    this.id = id;
    this.idMedicamento = idMedicamento;
    this.idTerapia = idTerapia;
    this.dosisMedicamento = dosisMedicamento;
    this.cantidadTerapias = cantidadTerapias;
    this.medicamento = medicamento;
    this.terapia = terapia;
  }
}
