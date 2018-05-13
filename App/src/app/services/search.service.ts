import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IResult, RootObject } from '../model/RootObject';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService{
    private _search : string;

    constructor(private http : HttpClient){}

    get Search(){
        return this._search;
    }

    set Search(s : string){
        this._search = s;
    }

    public getMovieList(): Observable<RootObject>{
        return this.http.get<RootObject>('http://localhost:4201/tmdb/search/movie/'+ this.Search);
    }

    public getSerieList(){
        return this.http.get<RootObject>('http://localhost:4201/tmdb/search/serie/'+ this.Search)
        .map(root => {root.results.forEach(result => {
            result.title = result.name;
            result.original_title = result.original_name;
        }); return root});
    }
}