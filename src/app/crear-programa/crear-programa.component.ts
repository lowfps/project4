import { Component, OnInit } from '@angular/core';

import { Programa } from "./../../models/programa";
import { ProgramaServiceService } from "../../services/programa-service.service";

@Component({
  selector: 'app-crear-programa',
  templateUrl: './crear-programa.component.html',
  styleUrls: ['./crear-programa.component.scss']
})
export class CrearProgramaComponent implements OnInit {

  programa: Programa = {
    cod_programa: 0,
    nombre_programa: '',
    fechacreacion_programa: ''
  }

  constructor(private programaService: ProgramaServiceService) { }

  ngOnInit(): void {
  }

  savePrograma(): void {
    const data = {
      cod_programa: this.programa.cod_programa,
      nombre_programa: this.programa.nombre_programa,
      fechacreacion_programa: this.programa.fechacreacion_programa,
    };

    this.programaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });



  }

}
