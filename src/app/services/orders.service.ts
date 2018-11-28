import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {
  private api: String = 'https://groep13.serveo.net';
  public selectedSandwich: Object = null;

  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.api}/orders`);
  }

  postOrder(order: Object): Observable<Object> {
    return this.http.post<Object>(`${this.api}/orders`, order);
  }

}
