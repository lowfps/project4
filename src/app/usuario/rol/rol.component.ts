import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rol } from "../../models/rol";
import { RolServicesService } from "../../services/rol-services.service";


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  roles?: Rol[];

  constructor(private rolService: RolServicesService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit(): void {

    this.getAll();

  }

  getAll(): void {
    this.rolService.getAll()
      .subscribe({
        next: (data) => {
          this.roles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deletRol(rol): void {
    this.rolService.delete(rol.cod_rol)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/rol']);

        },
        error: (e) => console.error(e)
      });
  }


}
