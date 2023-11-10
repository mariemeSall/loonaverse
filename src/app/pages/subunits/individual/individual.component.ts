import { Component, OnInit } from '@angular/core';
import { SubunitsService } from "../../../shared/services/subunits.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit{
  id: number = 0;
  constructor(protected subunitService: SubunitsService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.router.url.split("subunit/")[1];
    this.subunitService.getOne(this.id)
  }

}
