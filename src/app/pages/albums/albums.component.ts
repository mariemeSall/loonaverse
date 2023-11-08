import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../../shared/services/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements  OnInit{
constructor(protected albumService: AlbumsService) {
}

  ngOnInit(): void {
  this.albumService.getAll()
  }
}
