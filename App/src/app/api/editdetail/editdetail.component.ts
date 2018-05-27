import { Component } from "@angular/core";
import { CarService } from "../../services/car.service";
import { Car } from "../../model/car";
import { Manufacturer } from "../../model/manufacturer";

@Component({
    selector: "api-detail",
    templateUrl: "editdetail.component.html",
    styleUrls: ["editdetail.component.scss"]
})
export class EditDetailComponent{
    editingCar : boolean;
    editCar : Car; 
    editingManufacturer : boolean;
    editManufacturer : Manufacturer;

    get EditCar() : Car{
        return this.editCar;
    }

    set EditCar(car : Car){
        this.editCar = car;
    }

    get EditManufacturer() : Manufacturer{
        return this.editManufacturer;
    }

    set EditManufacturer(manufacturer : Manufacturer){
        this.editManufacturer = manufacturer;
    }

    constructor(private CarSvc : CarService){}

    public EditingCar(){
        if(this.editingCar){
            this.editingCar = false;
            this.editCar = null;
        }
        else{
            this.editingCar = true;
            this.editCar = this.CarSvc.car;
        }
    }

    public EditingManufacturer(){
        if(this.editingManufacturer){
            this.editingManufacturer = false;
            this.editManufacturer = null;
        }
        else{
            this.editingManufacturer = true;
            this.editManufacturer = this.CarSvc.manufacturer;
        }
    }

    public SaveCar(){
        var result
        this.CarSvc.updateCar(this.editCar).subscribe(r => result = r);
        console.log(result)
        this.editingCar = false;
        this.editCar = null;
    }

    public SaveManufacturer(){
        this.editingManufacturer = false;
        this.editManufacturer = null
    }
}