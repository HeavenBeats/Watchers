import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../model/manufacturer';
import { CarService } from '../../services/car.service';

@Component({
    selector: "api-manufacturers",
    templateUrl: "manufacturers.component.html",
    //styleUrls: ["manufacturers.component.scss"]
})
export class ManufacturersComponent implements OnInit{

    constructor(private CarSvc : CarService){}

    ngOnInit(){
        this.CarSvc.getManufacturers().subscribe(m => this.CarSvc.manufacturers = m);
    }

    public setManufacturer(id : number){
        this.CarSvc.setManufacturer(id);
    }
}