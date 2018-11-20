import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SandwichesService {
  private api: String = 'https://voveo.serveo.net';

  constructor(
    private http: HttpClient
  ) { }

  getSanwichById(id: String): Observable<Object> {
    return this.http.get<Object>(`${this.api}/sandwiches/${id}`);
  }

  getSandwiches(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.api}/sandwiches`);
  }

}
