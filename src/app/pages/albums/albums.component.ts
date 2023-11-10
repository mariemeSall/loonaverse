import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../../shared/services/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements  OnInit{
  year: number[] = [2016,2017,2018,2019,2020,2021,2022,2023]
constructor(protected albumService: AlbumsService) {
}

  ngOnInit(): void {
  this.albumService.getAll()
  }
}
