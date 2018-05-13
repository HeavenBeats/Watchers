import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  //styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(private route : ActivatedRoute, private SearchSvc : SearchService) {
    }

    ngOnInit(){
        this.route.params.subscribe(p => this.SearchSvc.Search = p['search'])
    }
}