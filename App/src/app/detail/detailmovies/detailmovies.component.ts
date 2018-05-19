import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CastService } from '../../services/cast.service';
import { IMovie, Spokenlanguage } from '../../model/Movie';
import { ICast } from '../../model/credit';

@Component({
  selector: 'detail-movies',
  templateUrl: './detailmovies.component.html',
  styleUrls: ['./detailmovies.component.scss']
})
export class DetailMoviesComponent implements OnInit {
  id: number;
  movie: IMovie;
  cast: ICast[];
  color: String = "#FFFFFF";

  constructor(private route: ActivatedRoute, private Msvc: MoviesService, private Csvc: CastService) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => this.id = +p['id']);
    this.Msvc.getMovie(this.id).subscribe(m => {
      this.movie = m;
      if (m.spoken_languages != null) {
        var languages: Spokenlanguage[] = [];
        for (var i = 0; i < m.spoken_languages.length - 1; i++)
          languages[i] = m.spoken_languages[i];
        m.spoken_languages = [];
        for (var i = 0; i < languages.length; i++)
          m.spoken_languages[i] = languages[i];
      }
      if (m.vote_average > 6) {
        this.color = "#1de220"
      }
      if (m.vote_average <= 6) {
        this.color = "#ff8f0f"
      }
      if (m.vote_average <= 4) {
        this.color = "#ff1125"
      }
    });
    this.Csvc.getMovieCredits(this.id).subscribe(c => this.cast = c.cast);
  }
}