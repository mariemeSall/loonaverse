import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { IndividualComponent } from './individual/individual.component';
import { AlbumsComponent } from './albums.component';


@NgModule({
  declarations: [
    IndividualComponent,
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
