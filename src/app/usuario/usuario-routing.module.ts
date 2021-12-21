import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Usuario } from '../models/usuario';
import { CrearFuncionalidadComponent } from './crear-funcionalidad/crear-funcionalidad.component';
import { CrearRolComponent } from './crear-rol/crear-rol.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FuncionalidadComponent } from "./funcionalidad/funcionalidad.component";
import { RolComponent } from "./rol/rol.component";
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'usuarios',
                component: UsuariosComponent,
                data: {
                    title: 'Usuarios'
                }
            },
            {
                path: 'crear-usuario',
                component: CrearUsuarioComponent,
                data: {
                    title: 'crear-usuario'
                }
            },
            {
                path: 'rol',
                component: RolComponent,
                data: {
                    title: 'Rol'
                }
            },
            {
                path: 'crear-rol',
                component: CrearRolComponent,
                data: {
                    title: 'crear-rol'
                }
            },
            {
                path: 'funcionalidad',
                component: FuncionalidadComponent,
                data: {
                    title: 'Funcionalidad'
                }
            },
            {
                path: 'crear-funcionalidad',
                component: CrearFuncionalidadComponent,
                data: {
                    title: 'Crear funcionalidad'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule],
    exports: [RouterModule],

})
export class UsuarioRoutingModule { }
