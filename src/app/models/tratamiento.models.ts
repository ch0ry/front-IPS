import { Medicamento } from 'src/app/models/medicamento.models';
import { Terapia } from 'src/app/models/terapia.models';

export class Tratamiento {
  id: number;
  idMedicamento: number;
  idTerapia: number;
  dosisMedicamento: string;
  cantidadTerapias: string;
  medicamento: Medicamento;
  terapia: Terapia;
}
