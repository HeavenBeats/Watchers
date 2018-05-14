import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'popular-movies',
  templateUrl: './popularmovies.component.html',
  //styleUrls: ['./popularmovies.component.scss']
})
export class PopularMoviesComponent implements OnInit{
    movies : IResult[];
    TotalPages : number[];
    page : number = 1;

    constructor(private Msvc : MoviesService){
    }

    ngOnInit(){
        this.Msvc.getPopularMovies().subscribe(d => {
            this.movies = d.results
            this.TotalPages = [];
            for(var i = 0; i<d.total_pages; i++){
                this.TotalPages[i] = i;
            }
        })
    }

    getNewPage = () =>{
        this.Msvc.getPopularMovies(this.page).subscribe(d => {
            this.movies = d.results;
        });
    }

    set pageNr(n : number){
        if(n < this.TotalPages.length + 1 && n > 0){
            this.page = n;
            this.getNewPage();
        }            
    }

    get pageNr(){
        return this.page;
    }
}