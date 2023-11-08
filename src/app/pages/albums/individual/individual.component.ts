import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../../../shared/services/albums.service";
import { Router } from "@angular/router";
import { SongsService } from "../../../shared/services/songs.service";
import { FooterComponent } from "../../../templates/footer/footer.component";
import { FooterService } from "../../../shared/services/footer.service";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit{
  id: number =0;
  constructor(protected albumService: AlbumsService, private router: Router, protected footer: FooterService) {
  }
  ngOnInit(): void {
    this.id = +this.router.url.split("album/")[1];
    this.albumService.getOne(this.id)
  }
  play(){
    this.albumService.albumPlaying = this.albumService.album
    this.footer.openFile(this.albumService.album.songs[0], 0);
    this.footer.play()
  }
}
