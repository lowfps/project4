import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { UsuarioRoutingModule } from "./usuario-routing.module";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';


import { FuncionalidadComponent } from "./funcionalidad/funcionalidad.component";
import { RolComponent } from "./rol/rol.component";

import { FormsModule } from '@angular/forms';
import { CrearFuncionalidadComponent } from './crear-funcionalidad/crear-funcionalidad.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CrearRolComponent } from './crear-rol/crear-rol.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
    declarations: [
        FuncionalidadComponent,
        RolComponent,
        CrearFuncionalidadComponent,
        CrearRolComponent,
        CrearUsuarioComponent,
        UsuariosComponent,
    ],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        PerfectScrollbarModule,
        HighchartsChartModule,
        FormsModule,

    ]
})
export class UsuarioModule { }
