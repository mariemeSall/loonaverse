import { Injectable } from '@angular/core';
import { SongsService } from "./songs.service";
import { AlbumsService } from "./albums.service";
import { Song } from "../models/song";
import { Album } from "../models/album";

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  queueShow: boolean=false;
  state:any;
  currentFile:any = {};
  nowPlaying: {song:number, album:number, file: Song} = {song:0, album:0, file: { title:'', audio:''}}
  albumPlaying: Album = {
    id:0,
    songs:[],
    date: new Date("00-00-00"),
    picture:'',
    title: '',
  };
  queue: Album[] = [];

  constructor(protected songService: SongsService, public albumService: AlbumsService) {
    this.songService.getState().subscribe(state => {
      if( state.ended&&!this.isLastPlayingCopy()) {
        this.next();
      }
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

  openFileCopy(file: Song, song:number, album: number) {
    this.nowPlaying = {song, album, file}
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
    let song = this.nowPlaying.song +1;
    let album = this.nowPlaying.album;
    if(song === this.queue[album].songs.length){
      song=0;
      album++;
    }
    let file = this.queue[album].songs[song];
    this.openFileCopy(file,song,album);
    const index = this.currentFile.index + 1;
     file = this.albumPlaying.songs[index];
    //this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    let file = this.albumPlaying.songs[index];
    //this.openFile(file, index);

    let song = this.nowPlaying.song ;
    let album = this.nowPlaying.album;
    if(song ===0){
      album --;
      song = this.queue[album].songs.length -1;
    } else {
      song--;
    }

    file = this.queue[album].songs[song];
    this.openFileCopy(file, song, album);

  }

  isFirstPlayingCopy(){
    return this.nowPlaying.song===0 && this.nowPlaying.album===0;
  }

  isLastPlayingCopy(){
    const song = this.nowPlaying.song;
    const album = this.nowPlaying.album;
    return (song === this.queue[album].songs.length -1) && (album===this.queue.length-1)
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return (this.currentFile.index === (this.albumPlaying.songs.length - 1))&&this.queue.length===0;
  }

  add(album:Album){
    this.queue.push(album)

  }
  // @ts-ignore
  onSliderChangeEnd(change) {
    this.songService.seekTo(change.value);
  }

  songInQueue(){
    let songs = 0;
    for (let i = 0; i < this.queue.length; i++) {
      songs += this.queue[i].songs.length

    }

    return songs;
  }

  addOneSong(song: Song) {
    let albumOneSong: Album = {
      ...this.albumService.album,
      songs : [song]
    }
    this.add(albumOneSong)
  }

  playOneSong(song: Song){
    let albumOneSong: Album = {
      ...this.albumService.album,
      songs : [song]
    }

    this.queue = [albumOneSong]
    this.openFileCopy(song, 0,0)
  }
}
