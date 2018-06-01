import { Car } from "./car";
import { Manufacturer } from "./manufacturer";

export interface Result{
    pages : number;
    carResults : Car[];
    manufacturerResults : Manufacturer[];    
}