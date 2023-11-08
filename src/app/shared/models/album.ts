import { Song } from "./song";
import { Member } from "./member";
import { Subunit } from "./subunit";
import { Artist } from "./artist";

export interface Album {
  id: number;
  title:string;
  date:Date;
  picture:string;
  subunit?: Subunit;
  member?:Member;
  songs: Song[];
}
