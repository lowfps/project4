import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario = {
    cod_usuario: 0,
    cod_rol: 0,
    nombre_usuario: '',
    correo_usuario: '',
    clave_usuario: ''
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  saveUsuario(): void {
    const data = {
      cod_usuario: this.usuario.cod_usuario,
      cod_rol: this.usuario.cod_rol,
      nombre_usuario: this.usuario.nombre_usuario,
      correo_usuario: this.usuario.correo_usuario,
      clave_usuario: this.usuario.clave_usuario
    };

    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });

  }

}
