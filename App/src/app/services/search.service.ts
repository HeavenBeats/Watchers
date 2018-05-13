import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IResult, RootObject } from '../model/RootObject';

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

    }

    public getCollectionList(){

    }
}