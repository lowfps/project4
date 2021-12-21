import { Component, OnInit } from '@angular/core';
import { Rol } from "../../models/rol";
import { RolServicesService } from "../../services/rol-services.service";

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.scss']
})
export class CrearRolComponent implements OnInit {

  rol: Rol={
    cod_rol: 0,
    detalle_rol: ''
  };

  constructor(private rolService: RolServicesService ) { }

  ngOnInit(): void {
  }

  saveRol(): void {
    const data = {
      cod_rol: this.rol.cod_rol,
      detalle_rol: this.rol.detalle_rol
    };

    this.rolService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (e) => console.error(e)
      });

  }

}
