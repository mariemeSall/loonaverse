import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubunitsRoutingModule } from './subunits-routing.module';
import { IndividualComponent } from './individual/individual.component';
import { SubunitsComponent } from './subunits.component';


@NgModule({
  declarations: [
    IndividualComponent,
    SubunitsComponent
  ],
  imports: [
    CommonModule,
    SubunitsRoutingModule
  ]
})
export class SubunitsModule { }
