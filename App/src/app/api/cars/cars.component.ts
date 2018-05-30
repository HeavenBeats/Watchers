import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { CarService } from '../../services/car.service';

@Component({
    selector: "api-cars",
    templateUrl: "cars.component.html",
    //styleUrls: ["cars.component.scss"]
})
export class CarsComponent implements OnInit{
    sortOptions : string[] = [
        "Model",
        "Horsepower",
        "Engine",
        "Fuel consumption",
        "Power source",
        "Seats",
        "Startprice",
        "Manufacturer"
    ];
    sortOption : string = this.sortOptions[0];

    set SortOption(s : string){
        this.sortOption = s;
        this.CarSvc.getCars(this.sortOption).subscribe(c => this.CarSvc.cars = c);
    }

    get SortOption() : string{
        return this.sortOption;
    }

    constructor(private CarSvc : CarService){}

    ngOnInit(){
        this.CarSvc.getCars(this.sortOption).subscribe(c => this.CarSvc.cars = c);
    }

    public setCar(id : number){
        this.CarSvc.setCar(id);
    }
}