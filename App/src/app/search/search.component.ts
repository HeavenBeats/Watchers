import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  //styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    search : string;

    constructor(private route : ActivatedRoute) {
    }

    ngOnInit(){
        this.route.params.subscribe(p => this.search = p['search'])
    }
}