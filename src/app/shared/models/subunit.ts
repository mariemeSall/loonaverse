import { Artist } from "./artist";
import { Member } from "./member";

export interface Subunit extends Artist{
  picture: string;
  debut: Date;
  members: Member[];


}
