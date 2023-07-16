export class Medicamento {
  id: number;
  nombre: string;
  concentracion: string;
  descripcion: string;

  constructor(
    id: number;
    nombre: string;
    concentracion: string;
    descripcion: string;
  ) {
    this.id = id;
    this.nombre = nombre;
    this.concentracion = concentracion;
    this.descripcion = descripcion;
  }
}
