import { Injectable } from '@angular/core';
import { ISerie } from '../model/Serie';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../model/RootObject';
import 'rxjs/add/operator/map';

@Injectable()
export class SeriesService{
    
    constructor(private http : HttpClient){ }

    public getPopularSeries( page? : number): Observable<RootObject>{
        if(!page)
            return this.http.get<RootObject>('http://localhost:4201/tmdb/populartv')
                .map(root =>{ root.results.forEach(result => {
                    result.title = result.name
                    result.original_title = result.original_name;
                    }); 
                    return root
                });
        return this.http.get<RootObject>('http://localhost:4201/tmdb/populartv/'+ page)
            .map(root =>{ root.results.forEach(result => {
                result.title = result.name
                result.original_title = result.original_name;
                }); 
                return root
            });
    }
}