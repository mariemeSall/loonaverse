import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subunit } from "../models/subunit";
import { HttpResponse } from "../models/http-response";

@Injectable({
  providedIn: 'root'
})
export class SubunitsService {
  subunits: Subunit[] = [];
  subunit: Subunit = {
    id:0,
    name:'',
    picture:'',
    debut: new Date('00-00-00'),
    members : [],
  }

  constructor(private http: HttpClient) { }

  getAll(){
    this.http.get<HttpResponse<Array<Subunit>>>(`api/subunit`).subscribe({
      next: (n) => {
        this.subunits = n.data
      }
    })
  }
  getOne(id: number){
    this.http.get<HttpResponse<Subunit>>(`api/subunit/${id}`).subscribe({
      next: (n) => {
        this.subunit = n.data
      }
    })
  }
}
