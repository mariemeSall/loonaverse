import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { IndividualComponent } from './individual/individual.component';
import { MembersComponent } from './members.component';


@NgModule({
  declarations: [
    IndividualComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
