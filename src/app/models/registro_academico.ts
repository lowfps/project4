import { Proceso } from "./proceso";

export class RegistroAcademico {
  public id_registro: number;
  public id_proceso: Proceso;


  constructor(id_registro: number, id_proceso: Proceso){
    this.id_registro = id_registro;
    this.id_proceso = id_proceso;
  }
}
