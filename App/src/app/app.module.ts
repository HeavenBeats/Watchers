import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { AppComponent } from './app.component';
import { NavComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopularSeriesComponent } from './home/popularseries/popularseries.component';
import { PopularMoviesComponent } from './home/popularmovies/popularmovies.component';
import { DetailMoviesComponent } from './detail/detailmovies/detailmovies.component';
import { DetailSeriesComponent } from './detail/detailseries/detailseries.component';
import { SearchComponent } from './search/search.component';
import { SearchMoviesComponent } from './search/searchmovies/searchmovies.component';
import { SearchSeriesComponent } from './search/searchseries/searchseries.component';
import { SeasonsComponent } from './detail/detailseries/seasons/seasons.component';
import { SeasonsListComponent } from './detail/detailseries/seasons/seasonslist.component';
import { EpisodesListComponent } from './detail/detailseries/seasons/episodeslist.component';
import { DetailEpisodeComponent } from './detail/detailseries/seasons/detailepisode.component';

import { SeriesService } from './services/series.service';
import { MoviesService } from './services/movies.service';
import { SearchService } from './services/search.service';
import { CastService } from './services/cast.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    PopularSeriesComponent,
    PopularMoviesComponent,
    DetailMoviesComponent,
    DetailSeriesComponent,
    SearchComponent,
    SearchMoviesComponent,
    SearchSeriesComponent,
    SeasonsComponent,
    SeasonsListComponent,
    EpisodesListComponent,
    DetailEpisodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoundProgressModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent},
      { path: "detailmovie/:id", component: DetailMoviesComponent},
      { path: "detailserie/:id", component: DetailSeriesComponent},
      { path: "detailserie/:id/seasons", component: SeasonsComponent},
      { path: "search/:search", component: SearchComponent},
      { path: "", redirectTo:"home", pathMatch: 'full'}
    ], {useHash: true} )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    SeriesService,
    MoviesService,
    SearchService,
    CastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
