export class Programa {
    public cod_programa: number;
    public nombre_programa: string;
    public fechacreacion_programa: string

    constructor(cod_programa: number, nombre_programa: string, fechacreacion_programa: string) {

        this.cod_programa = cod_programa;
        this.nombre_programa = nombre_programa;
        this.fechacreacion_programa = fechacreacion_programa;

    }
}