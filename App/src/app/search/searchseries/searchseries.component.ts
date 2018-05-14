import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'search-series',
  templateUrl: './searchseries.component.html',
  //styleUrls: ['./searchseries.component.scss']
})
export class SearchSeriesComponent{
    page : number = 1;

    constructor(private Ssvc : SearchService){
    }

    getNewPage = () =>{
        console.log("newpage")
        this.Ssvc.getSerieList(this.page).subscribe(d => {
            this.Ssvc.series = d.results;
        });
    }

    set pageNr(n : number){
        if(n < this.Ssvc.sTotalPages.length + 1 && n > 0){
            this.page = n;
            this.getNewPage();
        }            
    }

    get pageNr(){
        return this.page;
    }
}