import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../model/car";
import { Observable } from "rxjs/Observable";
import { Manufacturer } from "../model/manufacturer";
import { Result } from "../model/Result";

@Injectable()
export class CarService{
    public car : Car;
    public cars : Car[];
    public manufacturer : Manufacturer;
    public manufacturers : Manufacturer[];

    constructor(private http : HttpClient){}

    public getCars(sortOption : string, page : number, filter? : string) : Observable<Result>{
        if(filter != "" && filter != null && filter != "all")
            return this.http.get<Result>('http://localhost:5000/api/cars/?sort=' + sortOption + "&page=" + page  + "&filter=" + filter);
        return this.http.get<Result>('http://localhost:5000/api/cars/?sort=' + sortOption + "&page=" + page );
    }

    public getCar(id : number) : Observable<Car>{
        return this.http.get<Car>('http://localhost:5000/api/cars/' + id);
    }

    public setCar(id : number){
        this.getCar(id).subscribe(c => this.car = c);
        this.manufacturer = null;
    }

    public updateCar(car : Car) : Observable<Car>{
        return this.http.put<Car>('http://localhost:5000/api/cars/' + car.id, car);
    }

    public CreateCar(car : Car){
        return this.http.post<Car>('http://localhost:5000/api/cars', car);
    }

    public deleteCar(id : number){
        return this.http.delete<Car>('http://localhost:5000/api/cars/' + id);
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

    public updateManufacturer(manufacturer : Manufacturer){
        return this.http.put<Manufacturer>('http://localhost:5000/api/manufacturers/' + manufacturer.id, manufacturer);
    }

    public createManufacturer(manufacturer : Manufacturer){
        return this.http.post<Manufacturer>('http://localhost:5000/api/manufacturers', manufacturer);
    }

    public deleteManufacturer(id : number){
        return this.http.delete<Car>('http://localhost:5000/api/manufacturers/' + id)
    }
}