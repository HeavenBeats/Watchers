import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../model/RootObject';
import { IMovie } from '../model/Movie'

@Injectable()
export class MoviesService{
    
    constructor(private http : HttpClient){ }

    public getPopularMovies( page? : number): Observable<RootObject>{
        if(!page)
            return this.http.get<RootObject>('http://localhost:4201/tmdb/popularmovie');
        return this.http.get<RootObject>('http://localhost:4201/tmdb/popularmovie/'+ page);
    }

    public getMovie(id : number): Observable<IMovie>{
        return this.http.get<IMovie>('http://localhost:4201/tmdb/movie/'+ id);
    }
}