import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'search-series',
  templateUrl: './searchseries.component.html',
  //styleUrls: ['./searchseries.component.scss']
})
export class SearchSeriesComponent implements OnInit{
    series : IResult[];
    TotalPages : number[];
    page : number = 1;

    constructor(private Ssvc : SearchService){
    }

    ngOnInit(){
        this.Ssvc.getSerieList().subscribe(m => {
            this.series = m.results
            this.TotalPages = [];
            for(var i = 0; i<m.total_pages; i++){
                this.TotalPages[i] = i;
            }
        });
    }

    getNewPage = () =>{
        this.Ssvc.getSerieList().subscribe(d => { //page toevoegen
            this.series = d.results;
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