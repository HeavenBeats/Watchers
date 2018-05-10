import { Injectable } from '@angular/core';
import { ISerie } from '../model/Serie';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../model/RootObject';

@Injectable()
export class SeriesService{
    
    constructor(private http : HttpClient){ }

    public getPopularSeries( page? : number): Observable<RootObject>{
        if(!page)
            return this.http.get<RootObject>('http://localhost:4201/tmdb/populartv')
        return this.http.get<RootObject>('http://localhost:4201/tmdb/populartv/'+ page)
    }
}