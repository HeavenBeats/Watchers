import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { CarService } from '../../services/car.service';

@Component({
    selector: "api-cars",
    templateUrl: "cars.component.html",
    //styleUrls: ["cars.component.scss"]
})
export class CarsComponent implements OnInit{
    cars : Car[]

    constructor(private CarSvc : CarService){}

    ngOnInit(){
        this.CarSvc.getCars().subscribe(c => this.cars = c);
    }

    public setCar(id : number){
        this.CarSvc.setCar(id);
    }
}