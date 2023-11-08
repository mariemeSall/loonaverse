import { Artist } from "./artist";

export interface Member extends Artist{
  number: number;
  nationality: string;
  color: string;
  shape: string;
  animal: string;
  country?: string;
  power?: string;
  fruit?: string;

}
