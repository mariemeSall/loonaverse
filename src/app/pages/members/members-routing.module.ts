import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from "./members.component";
import { IndividualComponent } from "./individual/individual.component";

const routes: Routes = [
  {path:'', component: MembersComponent},
  {path:':id', component: IndividualComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
