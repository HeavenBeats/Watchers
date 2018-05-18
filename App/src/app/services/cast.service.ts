import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ICredit, ICast } from '../model/credit'

@Injectable()
export class CastService{
    
    constructor(private http : HttpClient){ }

    public getMovieCredits(id : number): Observable<ICredit>{
        return this.http.get<ICredit>('http://localhost:4201/tmdb/movie/'+ id +'/cast');
    }
}