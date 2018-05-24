import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../../../services/series.service';
import { SeasonsService } from '../../../services/seasons.service';
import { Season } from '../../../model/Serie';


@Component({
    selector: 'list-seasons',
    templateUrl: './seasonslist.component.html',
    //styleUrls: ['./seasonslist.component.scss']
})
export class SeasonsListComponent implements OnInit{
    id : number
    seasons : Season[]

    constructor(private route : ActivatedRoute, private SeriesSvc : SeriesService, private SeasonSvc : SeasonsService){}

    ngOnInit(){
        this.route.params.subscribe(p => this.id = +p['id']);
        this.SeriesSvc.getSerie(this.id).subscribe(s => this.seasons = s.seasons);
    }

    showEpisodes(season : number){
        this.SeasonSvc.setEpisodes(this.id, season);
    }
}