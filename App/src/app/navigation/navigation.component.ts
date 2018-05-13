import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  //styleUrls: ['./navigation.component.scss']
})
export class NavComponent {

  constructor(private router : Router){}

  public submit(search : string){
    this.router.navigate(['/search', search]);
  }
}