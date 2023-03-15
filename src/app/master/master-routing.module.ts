import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictsComponent } from './districts/districts.component';
import { GenderComponent } from './gender/gender.component';
import { LandingComponent } from './landing.component';
import { StatesComponent } from './states/states.component';
import { TalukasComponent } from './talukas/talukas.component';
import { TitlesComponent } from './titles/titles.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "", component:LandingComponent,
    children: [
      {path:"genders", component:GenderComponent },
      {path:"states", component:StatesComponent },
      {path:"districts/:states",component:DistrictsComponent },
      {path:"talukas/:districts", component:TalukasComponent },
      {path:"titles", component:TitlesComponent },
      {path:"users", component:UsersComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
