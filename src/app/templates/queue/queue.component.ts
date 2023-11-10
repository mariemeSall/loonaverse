import { Component } from '@angular/core';
import { FooterService } from "../../shared/services/footer.service";

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent {

  constructor(protected footer: FooterService) {
  }

  playSong(song:number, album:number){
    const file = this.footer.queue[album].songs[song]
    this.footer.nowPlaying = {song, album, file}
    this.footer.openFileCopy(file, song, album)
  }

}
