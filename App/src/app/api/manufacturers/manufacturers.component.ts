import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../model/manufacturer';

@Component({
    selector: "api-manufacturers",
    templateUrl: "manufacturers.component.html",
    //styleUrls: ["manufacturers.component.scss"]
})
export class ManufacturersComponent implements OnInit{
    manufacturers : Manufacturer[]


    ngOnInit(){
        
    }

    public setManufacturer(id : number){

    }
}