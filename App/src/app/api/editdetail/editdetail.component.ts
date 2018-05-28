import { Component, OnInit } from "@angular/core";
import { CarService } from "../../services/car.service";
import { Car } from "../../model/car";
import { Manufacturer } from "../../model/manufacturer";

@Component({
    selector: "api-detail",
    templateUrl: "editdetail.component.html",
    styleUrls: ["editdetail.component.scss"]
})
export class EditDetailComponent implements OnInit{
    editingCar : boolean;
    editCar : Car; 
    editingManufacturer : boolean;
    editManufacturer : Manufacturer;
    manufacturers : Manufacturer[];
    manId : number;

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

    get ManId() : number{
        return this.manId;
    }

    set ManId(id : number){
        this.manId = id;
    }

    constructor(private CarSvc : CarService){}

    ngOnInit(){
        this.CarSvc.getManufacturers().subscribe(m => this.manufacturers = m);
    }

    public EditingCar(){
        if(this.editingCar){
            this.editingCar = false;
            this.editCar = null;
        }
        else{
            this.editingCar = true;
            this.editCar = this.CarSvc.car;
            this.manId = this.editCar.manufacturer.id;
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
        this.editCar.manufacturer = this.manufacturers[this.ManId];
        this.CarSvc.updateCar(this.editCar);
        this.editingCar = false;
        this.editCar = null;
    }

    public SaveManufacturer(){
        this.CarSvc.updateManufacturer(this.editManufacturer).subscribe(m => console.log(m));
        this.editingManufacturer = false;
        this.editManufacturer = null
    }
}