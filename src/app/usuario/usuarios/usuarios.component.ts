import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from "../../models/usuario";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit(): void {

    this.getAll();

  }

  getAll(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuarios = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteUsuario(rol): void {
    this.usuarioService.delete(rol.cod_rol)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/rol']);

        },
        error: (e) => console.error(e)
      });
  }

}
