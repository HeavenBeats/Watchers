import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { CarService } from '../../services/car.service';

@Component({
    selector: "api-cars",
    templateUrl: "cars.component.html",
    //styleUrls: ["cars.component.scss"]
})
export class CarsComponent implements OnInit {
    sortOptions: string[] = [
        "Model",
        "Horsepower",
        "Engine",
        "Fuel consumption",
        "Power source",
        "Seats",
        "Startprice",
        "Manufacturer"
    ];
    sortOption: string = this.sortOptions[0];
    show: string = "all";
    pages : number[];
    page : number = 1;

    set SortOption(s: string) {
        this.sortOption = s;
        this.ReloadCars();
    }

    get SortOption(): string {
        return this.sortOption;
    }

    set Show(s: string) {
        this.show = s;
        console.log(s);
        this.ReloadCars();
    }

    get Show(): string {
        return this.show;
    }

    set Page(p : number){
        this.page = p;
        this.ReloadCars();
    }

    get Page() : number{
        return this.page;
    }

    constructor(private CarSvc: CarService) { }

    ngOnInit() {
        this.ReloadCars();
    }

    public setCar(id: number) {
        this.CarSvc.setCar(id);
    }

    public ReloadCars() {
        this.CarSvc.getCars(this.sortOption, this.page, this.show).subscribe(c => {
            this.CarSvc.cars = c.carResults;
            this.pages = [];
            for(var i = 1; i <= c.pages; i++){
                this.pages.push(i);
            }
        });
    }
}