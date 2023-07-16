export class Persona {
  id: number;
  documento: string;
  nombre: string;
  telefono: string;
  fechaNacimiento: Date;
  fechaDesde: Date;
  fechaHasta: Date;

  constructor(
    id: number,
    documento: string,
    nombre: string,
    telefono: string,
    fechaNacimiento: Date,
    fechaDesde: Date,
    fechaHasta: Date
  ) {
    this.id = id;
    this.documento = documento;
    this.nombre = nombre;
    this.telefono = telefono;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaDesde = fechaDesde;
    this.fechaHasta = fechaHasta;
  }
}
