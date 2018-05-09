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

    constructor(private Ssvc : SeriesService){
    }

    ngOnInit(){
        this.Ssvc.getPopularSeries().subscribe(d => this.series = d.results)
    }
}