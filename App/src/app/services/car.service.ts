import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../model/car";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CarService{
    car : Car;

    constructor(private http : HttpClient){}

    public getCars() : Observable<Car[]>{
        return this.http.get<Car[]>('http://localhost:5000/api/cars');
    }

    public getCar(id : number) : Observable<Car>{
        return this.http.get<Car>('http://localhost:5000/cars/' + id);
    }

    public setCar(id : number){
        this.getCar(id).subscribe(c => this.car = c);
    }
}