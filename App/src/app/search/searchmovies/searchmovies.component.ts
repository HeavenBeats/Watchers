import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'search-movies',
  templateUrl: './searchmovies.component.html',
  //styleUrls: ['./searchmovies.component.scss']
})
export class SearchMoviesComponent{
    page : number = 1;

    constructor(private Ssvc : SearchService){
    }

    getNewPage = () =>{
        this.Ssvc.getMovieList(this.page).subscribe(d => { 
            this.Ssvc.movies = d.results;
        });
    }

    set pageNr(n : number){
        if(n < this.Ssvc.mTotalPages.length + 1 && n > 0){
            this.page = n;
            this.getNewPage();
        }            
    }

    get pageNr(){
        return this.page;
    }
}