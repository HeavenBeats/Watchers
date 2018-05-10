import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service'
import { IResult } from '../../model/RootObject';

@Component({
  selector: 'popular-series',
  templateUrl: './popularseries.component.html',
  //styleUrls: ['./popularseries.component.scss']
})
export class PopularSeriesComponent implements OnInit{
    series : IResult[];
    TotalPages : number[];
    page : number = 1;

    constructor(private Ssvc : SeriesService){
    }

    ngOnInit(){
        this.Ssvc.getPopularSeries().subscribe(d => {
            this.series = d.results
            this.TotalPages = [];
            for(var i = 0; i<d.total_pages; i++){
                this.TotalPages[i] = i;
            }
        })
    }

    getNewPage = () =>{
        this.Ssvc.getPopularSeries(this.page).subscribe(d => {
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