import { Component, OnInit } from "@angular/core";
import { CarService } from "../../services/car.service";
import { Car } from "../../model/car";
import { Manufacturer } from "../../model/manufacturer";

@Component({
    selector: "api-detail",
    templateUrl: "editdetail.component.html",
    styleUrls: ["editdetail.component.scss"]
})
export class EditDetailComponent implements OnInit {
    editingCar: boolean;
    editCar: Car;
    editingManufacturer: boolean;
    editManufacturer: Manufacturer;
    manufacturers: Manufacturer[];
    manId: number;
    newCar: boolean;
    newManufacturer: boolean;

    get EditCar(): Car {
        return this.editCar;
    }

    set EditCar(car: Car) {
        this.editCar = car;
    }

    get EditManufacturer(): Manufacturer {
        return this.editManufacturer;
    }

    set EditManufacturer(manufacturer: Manufacturer) {
        this.editManufacturer = manufacturer;
    }

    get ManId(): number {
        return this.manId;
    }

    set ManId(id: number) {
        this.manId = id;
    }

    constructor(private CarSvc: CarService) { }

    ngOnInit() {
        this.CarSvc.getManufacturers().subscribe(m => this.manufacturers = m);
        setInterval(() => {
            if (this.CarSvc.car != null || this.CarSvc.manufacturer != null) {
                this.newCar = false;
                this.newManufacturer = false;
            }
        }, 100);
    }

    public EditingCar() {
        if (this.editingCar) {
            this.editingCar = false;
            this.editCar = null;
        }
        else {
            this.editingCar = true;
            this.editCar = this.CarSvc.car;
            this.manId = this.editCar.manufacturer.id;
        }
    }

    public EditingManufacturer() {
        if (this.editingManufacturer) {
            this.editingManufacturer = false;
            this.editManufacturer = null;
        }
        else {
            this.editingManufacturer = true;
            this.editManufacturer = this.CarSvc.manufacturer;
        }
    }

    public SaveCar() {
        this.editCar.manufacturer = this.manufacturers[this.ManId];
        this.CarSvc.updateCar(this.editCar);
        this.editingCar = false;
        this.editCar = null;
    }

    public SaveManufacturer() {
        this.CarSvc.updateManufacturer(this.editManufacturer).subscribe(m => console.log(m));
        this.editingManufacturer = false;
        this.editManufacturer = null
    }

    public NewCar() {
        this.newCar = true;
        this.CarSvc.car = null;
        this.CarSvc.manufacturer = null;
        this.editCar = <Car>{};
    }

    public NewManufacturer() {
        this.newManufacturer = true;
        this.CarSvc.manufacturer = null;
        this.CarSvc.car = null;
        this.editManufacturer = <Manufacturer>{};
    }

    public CreateCar() {
        this.editCar.manufacturer = this.manufacturers[this.manId];
        if (this.ReadyToSaveCar()) {
            this.newCar = false;
            this.CarSvc.car = this.editCar;
            this.editCar = null;
        }
        else {
            alert("please fill in all the fields");
        }
    }

    public CreateManufacturer() {
        if (this.ReadyToSaveManufacturer()) {
            this.newManufacturer = false;
            this.CarSvc.manufacturer = this.editManufacturer;
            this.editManufacturer = null;
        }
        else{
            alert("please fill in all the fields");
        }
    }

    public Cancel(){
        this.editCar = null;
        this.editingCar = false;
        this.newCar = false;
        this.editManufacturer = null;
        this.editingManufacturer = false;
        this.newManufacturer = false;
    }

    public ReadyToSaveCar() {
        return this.editCar.model != null && this.EditCar.engine != null && this.editCar.horsePower != null && this.editCar.fuelConsumption != null && this.editCar.powerSource != null && this.editCar.seats != null && this.editCar.startingPrice != null && this.editCar.manufacturer != null;
    }

    public ReadyToSaveManufacturer() {
        return this.editManufacturer.name && this.editManufacturer.origin != null && this.editManufacturer.foundedIn != null && this.editManufacturer.founder != null && this.editManufacturer.lastYearProfit != null && this.editManufacturer.lastYearRevenue != null && this.editManufacturer.homePage != null;
    }


}