import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../../services/series.service'
import { ISerie } from '../../model/Serie';

@Component({
  selector: 'detail-series',
  templateUrl: './detailseries.component.html',
  //styleUrls: ['./detailseries.component.scss']
})
export class DetailSeriesComponent implements OnInit{
    id : number;
    serie : ISerie;

    constructor(private route : ActivatedRoute, private Ssvc : SeriesService) {
    }

    ngOnInit(){
      this.route.params.subscribe(p => this.id = +p['id']);
      this.Ssvc.getSerie(this.id).subscribe(s => this.serie = s);
    }
}