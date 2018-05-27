import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../model/car";
import { Observable } from "rxjs/Observable";
import { Manufacturer } from "../model/manufacturer";

@Injectable()
export class CarService{
    public car : Car;
    public manufacturer : Manufacturer;

    constructor(private http : HttpClient){}

    public getCars() : Observable<Car[]>{
        return this.http.get<Car[]>('http://localhost:5000/api/cars');
    }

    public getCar(id : number) : Observable<Car>{
        return this.http.get<Car>('http://localhost:5000/api/cars/' + id);
    }

    public setCar(id : number){
        this.getCar(id).subscribe(c => this.car = c);
        this.manufacturer = null;
    }

    public updateCar(car : Car) : Observable<Car>{
        console.log(car);
        return this.http.put<Car>('http://localhost:5000/api/cars/' + car.id, car);
    }

    public getManufacturers() : Observable<Manufacturer[]>{
        return this.http.get<Manufacturer[]>('http://localhost:5000/api/manufacturers');
    }

    public getManufacturer(id : number) : Observable<Manufacturer>{
        return this.http.get<Manufacturer>('http://localhost:5000/api/manufacturers/' + id);
    }

    public setManufacturer(id : number){
        this.getManufacturer(id).subscribe(m => this.manufacturer = m);
        this.car = null;
    }
}