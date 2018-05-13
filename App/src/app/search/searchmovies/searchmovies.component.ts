import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'search-movies',
  templateUrl: './searchmovies.component.html',
  //styleUrls: ['./searchmovies.component.scss']
})
export class SearchMoviesComponent{
    movies : IResult[];
    page : number = 1;

    constructor(private Ssvc : SearchService){
    }

    getNewPage = () =>{
        this.Ssvc.getMovieList().subscribe(d => { //page toevoegen
            this.movies = d.results;
        });
    }

    set pageNr(n : number){
        if(n < this.Ssvc.mTotalPages.length && n > 0){
            this.page = n;
            this.getNewPage();
        }            
    }

    get pageNr(){
        return this.page;
    }
}