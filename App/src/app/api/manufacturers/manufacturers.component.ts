import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../model/manufacturer';
import { CarService } from '../../services/car.service';

@Component({
    selector: "api-manufacturers",
    templateUrl: "manufacturers.component.html",
    //styleUrls: ["manufacturers.component.scss"]
})
export class ManufacturersComponent implements OnInit{
    sortOptions: string[] = [
        "Name",
        "Origin",
        "Founded in",
        "Founder",
        "Revenue",
        "Profit"
    ];
    sortOption: string = this.sortOptions[0];
    pages : number[];
    page : number = 1;

    set SortOption(s: string) {
        this.sortOption = s;
        this.ReloadManufacturers();
    }

    get SortOption(): string {
        return this.sortOption;
    }

    set Page(p : number){
        this.page = p;
        this.ReloadManufacturers();
    }

    get Page() : number{
        return this.page;
    }

    constructor(private CarSvc : CarService){}

    ngOnInit(){
        this.ReloadManufacturers();
    }

    public setManufacturer(id : number){
        this.CarSvc.setManufacturer(id);
    }

    ReloadManufacturers(){
        this.CarSvc.getManufacturers(this.sortOption, this.page).subscribe(m => {
            this.CarSvc.manufacturers = m.manufacturerResults;
            this.pages = [];
            for(var i = 1; i <= m.pages; i++){
                this.pages.push(i);
            }
        });
    }
}