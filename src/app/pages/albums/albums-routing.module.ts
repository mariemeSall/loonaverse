import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from "./individual/individual.component";
import { AlbumsComponent } from "./albums.component";

const routes: Routes = [
  {path:'', component: AlbumsComponent},
  {path:':id', component: IndividualComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
