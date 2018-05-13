import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'search-movies',
  templateUrl: './searchmovies.component.html',
  //styleUrls: ['./searchmovies.component.scss']
})
export class SearchMoviesComponent implements OnInit{
    movies : IResult[];
    TotalPages : number[];
    page : number = 1;

    constructor(private Ssvc : SearchService){
    }

    ngOnInit(){
        this.Ssvc.getMovieList().subscribe(m => {
            this.movies = m.results
            this.TotalPages = [];
            for(var i = 0; i<m.total_pages; i++){
                this.TotalPages[i] = i;
            }
        });
    }

    getNewPage = () =>{
        this.Ssvc.getMovieList().subscribe(d => { //page toevoegen
            this.movies = d.results;
        });
    }

    set pageNr(n : number){
        if(n < this.TotalPages.length && n > 0){
            this.page = n;
            this.getNewPage();
        }            
    }

    get pageNr(){
        return this.page;
    }
}