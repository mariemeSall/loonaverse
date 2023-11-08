import { Component, OnInit } from '@angular/core';
import { MembersService } from "../../shared/services/members.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{
  constructor(protected membersService: MembersService) {
  }

  ngOnInit(): void {
    this.membersService.getMembers()
  }

}
