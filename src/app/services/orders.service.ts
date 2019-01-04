import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Sandwich } from '../models/sandwich.model';
import { Order } from '../models/order.model';

@Injectable()
export class OrdersService {
   private api: String = 'http://193.191.177.8:10048/den-travak';
   public selectedSandwich: Sandwich = null;
   public phoneNumber: String = null;

   constructor(
      private http: HttpClient
   ) { }

   getOrders(): Observable<Order[]> {
      return this.http.get<Order[]>(`${this.api}/orders`);
   }

   getOrdersByDate(date: string): Observable<Order[]> {
       return this.http.get<Order[]>(`${this.api}/orders?date=${date}`);
   }

   postOrder(order: Order): Observable<Order> {
      return this.http.post<Order>(`${this.api}/orders`, order);
   }

}
