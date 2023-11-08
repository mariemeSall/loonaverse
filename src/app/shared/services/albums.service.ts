import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from "../models/album";
import { HttpResponse } from "../models/http-response";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  album: Album = {
    id:0,
    songs:[],
    date: new Date("00-00-00"),
    picture:'',
    title: '',
  }
  albumPlaying: Album = {
    id:0,
    songs:[],
    date: new Date("00-00-00"),
    picture:'',
    title: '',
  }
  api = process.env['API_URL'];

  albums: Album[]=[]
  constructor(private http : HttpClient) {
  }

  getAll(){
    this.http.get<HttpResponse<Array<Album>>>(`${this.api}/album`).subscribe({
      next: (n)=> {
        this.albums = n.data
      }
    })
  }

  getOne(id: number){
    this.http.get<HttpResponse<Album>>(`${this.api}/album/${id}`).subscribe(
      { next: (n)=> {
        this.album = n.data; console.log(this.album)
        } }
    )
  }
}
