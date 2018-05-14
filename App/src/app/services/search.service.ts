import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IResult, RootObject } from '../model/RootObject';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService{
    private _search : string;
    public movies : IResult[];
    public mTotalPages : number[];
    public series : IResult[];
    public sTotalPages : number[];

    constructor(private http : HttpClient){}

    get Search(){
        return this._search;
    }

    set Search(s : string){
        this._search = s;
        this.getMovieList().subscribe(m => {
            this.movies = m.results;
            this.mTotalPages = [];
            for(var i = 0; i<m.total_pages; i++){
                this.mTotalPages[i] = i;
            }
        });
        this.getSerieList().subscribe(s => {
            this.series = s.results;
            this.sTotalPages = [];
            for(var i = 0; i<s.total_pages; i++){
                this.sTotalPages[i] = i;
            }
        });
    }

    public getMovieList(page? : number): Observable<RootObject>{
        if(!page)
            return this.http.get<RootObject>('http://localhost:4201/tmdb/search/movie/'+ this.Search);
        return this.http.get<RootObject>('http://localhost:4201/tmdb/search/movie/'+ this.Search + '/' + page);
    }

    public getSerieList(page? : number){
        if(!page)
            return this.http.get<RootObject>('http://localhost:4201/tmdb/search/serie/'+ this.Search)
                .map(root => {root.results.forEach(result => {
                    result.title = result.name;
                    result.original_title = result.original_name;
                }); return root});
        return this.http.get<RootObject>('http://localhost:4201/tmdb/search/serie/'+ this.Search + '/' + page)
            .map(root => {root.results.forEach(result => {
                result.title = result.name;
                result.original_title = result.original_name;
            }); return root});
    }
}