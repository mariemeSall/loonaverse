import { Component } from '@angular/core';
import { SongsService } from "../../shared/services/songs.service";
import { Song } from "../../shared/models/song";
import { AlbumsService } from "../../shared/services/albums.service";
import { FooterService } from "../../shared/services/footer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 constructor(protected footer: FooterService) {
 }
}
