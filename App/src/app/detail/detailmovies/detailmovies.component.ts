import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service'
import { IMovie } from '../../model/Movie';

@Component({
  selector: 'detail-movies',
  templateUrl: './detailmovies.component.html',
  //styleUrls: ['./detailmovies.component.scss']
})
export class DetailMoviesComponent implements OnInit{
    id : number;
    movie : IMovie;

    constructor(private route : ActivatedRoute, private Msvc : MoviesService) {
    }

    ngOnInit(){
      this.route.params.subscribe(p => this.id = +p['id']);
      this.Msvc.getMovie(this.id).subscribe(m => this.movie = m);
    }
}