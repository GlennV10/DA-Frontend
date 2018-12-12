import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecommendationService {
   // private api: String = 'http://193.191.177.8:10048';
   private api: String = 'http://Groep13.serveo.net';

   constructor(
      private http: HttpClient
   ) { }

   recommendItem(recommendation: Object) {
      return this.http.post(`${this.api}/recommend`, recommendation);
   }

}
