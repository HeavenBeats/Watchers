import { Component, OnInit } from '@angular/core';
import { SeasonsService } from '../../../services/seasons.service'

@Component({
    selector: 'list-episodes',
    templateUrl: './episodeslist.component.html',
    //styleUrls: ['./episodeslist.component.scss']
})
export class EpisodesListComponent implements OnInit{

    constructor(private SeasonSvc : SeasonsService){}

    ngOnInit(){
        this.SeasonSvc.episodes = null;
    }

    public showEpisode(episode : number){
        this.SeasonSvc.setEpisode(episode);
        console.log(this.SeasonSvc.episode.guest_stars)
    }
}