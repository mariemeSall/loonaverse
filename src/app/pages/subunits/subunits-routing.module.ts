import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubunitsComponent } from "./subunits.component";
import { IndividualComponent } from "./individual/individual.component";

const routes: Routes = [
  {path:'', component: SubunitsComponent},
  {path:':id', component: IndividualComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubunitsRoutingModule { }
