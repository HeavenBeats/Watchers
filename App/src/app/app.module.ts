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
import { PopularMoviesComponent } from './home/popularmovies/popularmovies.component';
import { DetailMoviesComponent } from './detail/detailmovies/detailmovies.component'

import { SeriesService } from './services/series.service';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    PopularSeriesComponent,
    PopularMoviesComponent,
    DetailMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent},
      { path: "detailmovie/:id", component: DetailMoviesComponent},
      { path: "", redirectTo:"home", pathMatch: 'full'}
    ], {useHash: true} )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    SeriesService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
