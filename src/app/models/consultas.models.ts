
export class Consulta {
  id: number;
  idSede: number;
  idPaciente: number;
  idMedico: number;
  idTratamiento: number;
  fecha: Date;
  sintomas: string;
  diagnostico: string;
  paciente: number;
  medico: number;
}

export class ConsultaGet extends Consulta{
  nombreSede: string;
  nombreMedico: string;
  nombrePaciente: string;
}