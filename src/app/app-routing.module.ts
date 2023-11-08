import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from "./pages/accueil/accueil.component";

export const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'member', loadChildren: ()=> import('./pages/members/members.module').then(m=> m.MembersModule)},
  {path:'subunit', loadChildren: ()=> import('./pages/subunits/subunits.module').then(m=> m.SubunitsModule)},
  {path:'album', loadChildren: ()=> import('./pages/albums/albums.module').then(m=> m.AlbumsModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
