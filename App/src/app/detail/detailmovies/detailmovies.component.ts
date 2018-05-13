import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CastService } from '../../services/cast.service';
import { IMovie } from '../../model/Movie';
import { ICast } from '../../model/credit';

@Component({
  selector: 'detail-movies',
  templateUrl: './detailmovies.component.html',
  //styleUrls: ['./detailmovies.component.scss']
})
export class DetailMoviesComponent implements OnInit{
    id : number;
    movie : IMovie;
    cast : ICast[];

    constructor(private route : ActivatedRoute, private Msvc : MoviesService, private Csvc : CastService) {
    }

    ngOnInit(){
      this.route.params.subscribe(p => this.id = +p['id']);
      this.Msvc.getMovie(this.id).subscribe(m => this.movie = m);
      this.Csvc.getCredits(this.id).subscribe(c => this.cast = c.cast);
    }
}