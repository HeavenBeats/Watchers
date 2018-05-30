import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    //styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(private route: ActivatedRoute, private SearchSvc: SearchService, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => this.SearchSvc.Search = p['search'])
    }

    public getBackground() {
        return this.sanitizer.bypassSecurityTrustStyle(`url("https://qz.com/wp-content/uploads/2018/01/movie-theater-2-1.jpg?quality=80&strip=all&w=2400")`)
    }
}