import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angular4-social-login';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  //styleUrls: ['./navigation.component.scss']
})
export class NavComponent {
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private router : Router, private authService: AuthService){}

  public submit(search : string){
    this.router.navigate(['/search', search]);
  }  

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  Logout(){
    this.authService.signOut();
  }
}