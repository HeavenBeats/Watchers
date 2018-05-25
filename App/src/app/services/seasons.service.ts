import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Episode, ISeason } from '../model/Season';

@Injectable()
export class SeasonsService{
    episodes : Episode[];
    episode : Episode;
    season : ISeason;

    constructor(private http : HttpClient){}

    public setEpisodes(serie_id : number, season : number){
        this.getSeason(serie_id, season).subscribe(s => {
            this.episodes = s.episodes;
            this.season = s;
        });
    }

    private getSeason(serie_id : number, season : number) : Observable<ISeason>{
        return this.http.get<ISeason>('http://localhost:4201/tmdb/serie/' + serie_id + '/season/' + season);
    }

    setEpisode(episode_nr : number){
        this.episode = this.episodes[episode_nr];
    }
}