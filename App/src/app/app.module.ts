import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopularSeriesComponent } from './home/popularseries/popularseries.component';

import { SeriesService } from './services/series.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    PopularSeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent},
      { path: "", redirectTo:"home", pathMatch: 'full'}
    ], {useHash: true} )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
