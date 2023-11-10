import { Component, OnInit } from '@angular/core';
import { SubunitsService } from "../../shared/services/subunits.service";

@Component({
  selector: 'app-subunits',
  templateUrl: './subunits.component.html',
  styleUrls: ['./subunits.component.css']
})
export class SubunitsComponent implements OnInit{

  constructor(protected subunitService: SubunitsService) {
  }

  ngOnInit() {
    this.subunitService.getAll()
  }

}
