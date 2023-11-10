import { Component, OnChanges, OnInit } from '@angular/core';
import { Member } from "../../../shared/models/member";
import { MembersService } from "../../../shared/services/members.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit{
  id: number = 0;


    constructor(protected memberService: MembersService, private router: Router) {
    }

  ngOnInit(): void {
    this.id = +this.router.url.split("member/")[1];
    this.memberService.getMember(this.id)
  }
}
