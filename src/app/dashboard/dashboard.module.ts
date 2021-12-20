import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ProgramaComponent } from './programa-academico/programa.academicocomponent';
import { ProcesoComponent } from './proceso/proceso.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    ProgramaComponent,
    ProcesoComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule,
    FormsModule
  ]
})
export class DashboardModule { }
