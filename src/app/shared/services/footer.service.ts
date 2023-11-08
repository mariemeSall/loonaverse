import { Injectable } from '@angular/core';
import { SongsService } from "./songs.service";
import { AlbumsService } from "./albums.service";
import { Song } from "../models/song";

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  state:any;
  currentFile:any = {};


  constructor(protected songService: SongsService, protected albumService: AlbumsService) {
    this.songService.getState().subscribe(state => {
      this.state = state;
    });
  }
  playStream(url:string) {
    this.songService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file:Song, index:number) {
    this.currentFile = {index, file}
    this.songService.stop();
    this.playStream("assets/songs/"+file.audio);
  }

  pause() {
    this.songService.pause();
  }
  stop() {
    this.songService.stop();
  }
  play() {
    this.songService.play();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.albumService.albumPlaying.songs[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.albumService.albumPlaying.songs[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.albumService.albumPlaying.songs.length - 1;
  }

  // @ts-ignore
  onSliderChangeEnd(change) {
    this.songService.seekTo(change.value);
  }
}
