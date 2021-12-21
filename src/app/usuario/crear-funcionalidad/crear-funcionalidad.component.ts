import { Component, OnInit } from '@angular/core';
import { Funcionalidad } from "../../models/funcionalidad";
import { FuncionalidadService } from "../../services/funcionalidad-services.service";

@Component({
  selector: 'app-crear-funcionalidad',
  templateUrl: './crear-funcionalidad.component.html',
  styleUrls: ['./crear-funcionalidad.component.scss']
})
export class CrearFuncionalidadComponent implements OnInit {


  funcionalidad: Funcionalidad = {
    cod_funcionalidad: 0,
    detalle_funcionalidad: ' '
  }

  submitted = false;

  constructor(private funcionalidadService: FuncionalidadService) { }

  ngOnInit(): void {
    
  }


  saveFuncionalidad(): void {
    const data = {
      cod_funcionalidad: this.funcionalidad.cod_funcionalidad,
      detalle_funcionalidad: this.funcionalidad.detalle_funcionalidad
    };

    this.funcionalidadService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });

  }

  newFuncionalidad(): void {
    this.submitted = false;
    this.funcionalidad = new Funcionalidad(0, '');
  }




}

