import { Member } from "./member";

export interface Song {
  title:string;
  audio:string;
  featuring?:Member[];
}
