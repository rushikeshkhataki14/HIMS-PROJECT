import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SharedModule
  ]
})
export class GeneralModule { }
