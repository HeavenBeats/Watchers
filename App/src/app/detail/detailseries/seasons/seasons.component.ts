import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-seasons',
    templateUrl: './seasons.component.html',
    //styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit{
    id : number;
    background : string;

    constructor(private SeriesSvc : SeriesService, private route : ActivatedRoute, private sanitizer : DomSanitizer){}

    ngOnInit(){
        this.route.params.subscribe(p => this.id = +p['id']);
        this.SeriesSvc.getSerie(this.id).subscribe(s => this.background = s.backdrop_path);
    }

    public getBackground() {
        return this.sanitizer.bypassSecurityTrustStyle(`url("https://image.tmdb.org/t/p/original${this.background}")`)
    }
}