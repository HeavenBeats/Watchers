import { Component } from "@angular/core";
import { CarService } from "../../services/car.service";
import { Car } from "../../model/car";

@Component({
    selector: "api-detail",
    templateUrl: "editdetail.component.html",
    //styleUrls: ["editdetail.component.scss"]
})
export class EditDetailComponent{
    edit : boolean;
    editCar : Car; 

    get EditCar(){
        return this.editCar;
    }

    set EditCar(car : Car){
        this.editCar = car;
    }

    constructor(private CarSvc : CarService){}

    public Editing(){
        if(this.edit){
            this.edit = false;
            this.editCar = null;
        }
        else{
            this.edit = true;
            this.editCar = this.CarSvc.car;
        }
    }

    public SaveCar(){
        var result
        this.editCar.manufacturer = null;
        this.CarSvc.updateCar(this.editCar).subscribe(r => result = r);
        console.log(result)
        this.edit = false;
        this.editCar = null;
    }
}