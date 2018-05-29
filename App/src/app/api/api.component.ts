import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: "app-api",
    templateUrl: "api.component.html",
    //styleUrls: ["api.component.scss"]
})
export class ApiComponent {

    constructor(private sanitizer: DomSanitizer) { }

    public getBackground() {
        return this.sanitizer.bypassSecurityTrustStyle(`url("http://bestroadtripever.com/wp-content/uploads/2014/01/o-ROAD-TRIP-facebook.jpg")`)
    }
}