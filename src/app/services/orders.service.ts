import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {
  private api: String = 'https://voveo.serveo.net';

  constructor(
    private http: HttpClient
  ) { }

  postOrder(order: Object): Observable<Object> {
    return this.http.post<Object>(`${this.api}/orders`, order);
  }

}
