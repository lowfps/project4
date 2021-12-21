import { Documentos } from "./documentos";

export class Proceso {
    public id_proceso:  number;
    public id_documentos: Documentos;
    public fecha_inicio: string
    public fecha_fin: string
    public detalle_proceso: string

    constructor(id_proceso: number, id_documentos: Documentos, fecha_inicio: string, fecha_fin: string, detall_proceso: string) {

        this.id_proceso = id_proceso;
        this.id_documentos = id_documentos;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.detalle_proceso = detall_proceso

    }
}
