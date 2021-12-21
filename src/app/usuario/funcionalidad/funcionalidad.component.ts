import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Funcionalidad } from "../../models/funcionalidad";
import { FuncionalidadService } from "../../services/funcionalidad-services.service";

@Component({
  selector: 'app-funcionalidad',
  templateUrl: './funcionalidad.component.html',
  styleUrls: ['./funcionalidad.component.scss']
})
export class FuncionalidadComponent implements OnInit {

  funcionalidades?: Funcionalidad[];

  constructor(private funcionalidadService: FuncionalidadService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit(): void {

    this.getAll();

  }

  getAll(): void {
    this.funcionalidadService.getAll()
      .subscribe({
        next: (data) => {
          this.funcionalidades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteFuncionalidad(funcionalidad): void {
    this.funcionalidadService.delete(funcionalidad.cod_funcionalidad)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/funcion']);

        },
        error: (e) => console.error(e)
      });
  }

}