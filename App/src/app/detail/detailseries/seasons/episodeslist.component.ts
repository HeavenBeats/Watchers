import { Component } from '@angular/core';
import { SeasonsService } from '../../../services/seasons.service'

@Component({
    selector: 'list-episodes',
    templateUrl: './episodeslist.component.html',
    //styleUrls: ['./episodeslist.component.scss']
})
export class EpisodesListComponent{

    constructor(private SeasonSvc : SeasonsService){}

}