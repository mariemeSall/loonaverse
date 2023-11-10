import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { IndividualComponent } from './individual/individual.component';
import { AlbumsComponent } from './albums.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyListModule } from "@angular/material/legacy-list";


@NgModule({
  declarations: [
    IndividualComponent,
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatLegacyListModule
  ]
})
export class AlbumsModule { }
