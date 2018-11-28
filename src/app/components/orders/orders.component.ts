import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../../services/orders.service';

@Component({
   selector: 'app-orders',
   templateUrl: './orders.component.html',
   styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
   private orders: Object [];

   constructor(
      private ordersService: OrdersService
   ) { }

   ngOnInit() {
      this.getOrders();
   }

   getOrders() {
      this.ordersService.getOrders()
         .subscribe((orders) => {
            this.orders = orders;
         });
   }

}
