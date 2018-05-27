import { Component } from "@angular/core";
import { CarService } from "../../services/car.service";

@Component({
    selector: "api-detail",
    templateUrl: "editdetail.component.html",
    //styleUrls: ["editdetail.component.scss"]
})
export class EditDetailComponent{

    constructor(private CarSvc : CarService){}
}