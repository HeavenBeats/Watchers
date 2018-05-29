import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private sanitizer: DomSanitizer) { }

  public getBackground() {
    return this.sanitizer.bypassSecurityTrustStyle(`url("https://qz.com/wp-content/uploads/2018/01/movie-theater-2-1.jpg?quality=80&strip=all&w=2400")`)
  }
}