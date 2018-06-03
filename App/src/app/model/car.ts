import { Manufacturer } from "./manufacturer";

export interface Car {
    id: number;
    model: string;
    horsePower: number;
    engine: string;
    fuelConsumption: number;
    powerSource: number;
    seats: number;
    startingPrice: number;
    manufacturer: Manufacturer;
}