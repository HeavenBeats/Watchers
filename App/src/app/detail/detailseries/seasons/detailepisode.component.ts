import { Component, OnInit } from '@angular/core';
import { SeasonsService } from '../../../services/seasons.service';

@Component({
    selector: 'detail-episode',
    templateUrl: './detailepisode.component.html',
    //styleUrls: ['./detailepisode.component.scss']
})
export class DetailEpisodeComponent implements OnInit{

    constructor(private SeasonSvc : SeasonsService){}

    ngOnInit(){
        this.SeasonSvc.episode = null;
    }
}