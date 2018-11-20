import { Component, OnInit } from '@angular/core';

import { SandwichesService } from '../../services/sandwiches.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.css']
})
export class OrderSandwichComponent implements OnInit {
  private order: Object;

  constructor(
    private sandwichesService: SandwichesService,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    
  }

  getSandwich(id: String) {

  }

  postOrder() {

  }

}
