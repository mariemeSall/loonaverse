import { Injectable } from '@angular/core';
import { Member } from "../models/member";
import { HttpClient } from "@angular/common/http";
import { HttpResponse } from "../models/http-response";


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: Member[] = [];
  member : Member ={
    id:0,
    debut: new Date("00-00-00"),
    picture: "",
    color:'',
    animal: '',
    name: '',
    nationality: '',
    number:0,
    shape: '',
  };
  constructor(private http: HttpClient) {
    this.getMembers()
  }

  getMembers() {
    this.http.get<HttpResponse<Array<Member>>>(`api/member`).subscribe({
      next:(m => {this.members = m.data})
    })
  }

  getMember(id: number) {
    this.http.get<HttpResponse<Member>>(`api/member/${id}`).subscribe({
      next:(m => {this.member = m.data})
    })

  }

}
