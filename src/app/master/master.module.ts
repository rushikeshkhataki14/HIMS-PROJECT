import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { GenderComponent } from './gender/gender.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';
import { TalukasComponent } from './talukas/talukas.component';
import { TitlesComponent } from './titles/titles.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    GenderComponent,
    LandingComponent,
    StatesComponent,
    DistrictsComponent,
    TalukasComponent,
    TitlesComponent,
    UsersComponent,


  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule,
    
  ]

})
export class MasterModule { }
