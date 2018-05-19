import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { CastService } from '../../services/cast.service';
import { ICast } from '../../model/credit';
import { ISerie } from '../../model/Serie';

@Component({
  selector: 'detail-series',
  templateUrl: './detailseries.component.html',
  //styleUrls: ['./detailseries.component.scss']
})
export class DetailSeriesComponent implements OnInit {
  id: number;
  serie: ISerie;
  cast: ICast[];
  color: String = "#FFFFFF";

  constructor(private route: ActivatedRoute, private Ssvc: SeriesService, private Csvc: CastService) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => this.id = +p['id']);
    this.Ssvc.getSerie(this.id).subscribe(s => {
      this.serie = s;
      if (s.vote_average > 6) {
        this.color = "#1de220"
      }
      if (s.vote_average <= 6) {
        this.color = "#ff8f0f"
      }
      if (s.vote_average <= 4) {
        this.color = "#ff1125"
      }
    });
    this.Csvc.getSerieCredits(this.id).subscribe(c => this.cast = c.cast);
  }
}