import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SandwichesService {
    private api: String = 'http://193.191.177.8:10048';
    // private api: String = 'http://Groep13.serveo.net';
    public selectedSandwich: Object = null;

    constructor(
        private http: HttpClient
    ) { }

    getSanwichById(id: String): Observable<Object> {
        return this.http.get<Object>(`${this.api}/sandwiches/${id}`);
    }

    getSandwiches(): Observable<Object[]> {
        return this.http.get<Object[]>(`${this.api}/sandwiches`);
    }

    addSandwich(sandwich: Object): Observable<Object> {
        return this.http.post<Object>(`${this.api}/sandwiches`, sandwich);
    }

    updateSandwich(sandwich: Object): Observable<Object> {
        return this.http.put<Object>(`${this.api}/sandwiches/${sandwich['id']}`, sandwich);
    }

}