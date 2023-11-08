import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from "rxjs";
import { StreamState } from "../models/stream-state";
import { HttpClient } from "@angular/common/http";
import { Song } from "../models/song";
import { HttpResponse } from "../models/http-response";
import { Album } from "../models/album";

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  api = process.env['API_URL'];

  constructor() {
  }
  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  private state: StreamState = {
    playing: false,
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );
  private streamObservable(url: string) {
   return  new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        this.resetState();
      };
    });
  }

  // @ts-ignore
  private addEvents(obj, events, handler) {
    // @ts-ignore
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  // @ts-ignore
  private removeEvents(obj, events, handler) {
    // @ts-ignore
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }
  playStream(url:string) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  seekTo(seconds:number) {
    this.audioObj.currentTime = seconds;
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audioObj.duration;
        this.state.canplay = true;
        break;
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = this.audioObj.currentTime;
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }
  private resetState() {
    this.state = {
      playing: false,
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }
  stop() {
    this.stop$.next(true);
  }


}