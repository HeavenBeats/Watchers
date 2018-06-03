import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private sanitizer: DomSanitizer) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public getBackground() {
    return this.sanitizer.bypassSecurityTrustStyle(`url("https://www.nyfa.edu/film-school-blog/wp-content/uploads/2015/01/5779401142_78dd986417_o1.jpg")`)
}
}