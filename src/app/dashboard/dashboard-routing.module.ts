import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProcesoComponent } from './proceso/proceso.component';
import { ProgramaComponent } from './programa-academico/programa.academicocomponent';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'programa-academico',
        component: ProgramaComponent,
        data: {
          title: 'programa-academico'
        }
      },
      {
        path: 'crear-programa',
        
        data: {
          title: 'crear-programa'
        }
      },
      {
        path: 'procesos',
        component: ProcesoComponent,
        data: {
          title: 'procesos'
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
export class DashboardRoutingModule { }
