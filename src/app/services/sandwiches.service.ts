import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sandwich } from '../models/sandwich.model';

@Injectable()
export class SandwichesService {
   // private api: String = 'http://localhost:8080';
   private api: String = 'http://193.191.177.8:10048/den-travak';
   public selectedSandwich: Sandwich = null;

   constructor(
      private http: HttpClient
   ) { }

   getSanwichById(id: String): Observable<Sandwich> {
      return this.http.get<Sandwich>(`${this.api}/sandwiches/${id}`);
   }

   getSandwiches(): Observable<Sandwich[]> {
      return this.http.get<Sandwich[]>(`${this.api}/sandwiches`);
   }

   addSandwich(sandwich: Object): Observable<Sandwich> {
      return this.http.post<Sandwich>(`${this.api}/sandwiches`, sandwich);
   }

   updateSandwich(sandwich: Object): Observable<Sandwich> {
      return this.http.put<Sandwich>(`${this.api}/sandwiches/${sandwich['id']}`, sandwich);
   }

}