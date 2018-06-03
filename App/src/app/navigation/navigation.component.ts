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
  search : string;

  get Search() : string{
    return this.search;
  }

  set Search(s : string){
    this.search = s;
  }

  constructor(private router : Router, private authService: AuthService){}

  public submit(){
    this.router.navigate(['/search', this.search]);
    this.search = "";
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