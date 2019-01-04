import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { SandwichesService } from '../../services/sandwiches.service';
import { OrdersService } from '../../services/orders.service';

import { Sandwich } from '../../models/sandwich.model';
import { Order } from '../../models/order.model';

@Component({
   selector: 'app-order-sandwich',
   templateUrl: './order-sandwich.component.html',
   styleUrls: ['./order-sandwich.component.css']
})
export class OrderSandwichComponent implements OnInit {
   sandwich: Sandwich;
   order: Order;
   phoneNumber: string;
   form: FormGroup;

   constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private sandwichesService: SandwichesService,
      private ordersService: OrdersService
   ) {
      this.form = formBuilder.group({
         bread: new FormControl('boterhammekes')
      });
   }

   ngOnInit() {
      if (this.ordersService.selectedSandwich === null) this.router.navigate(['/sandwiches']);
      this.sandwich = this.ordersService.selectedSandwich;
   }

   postOrder() {
      let order = {
         sandwichId: this.sandwich['id'],
         name: this.sandwich['name'],
         price: this.sandwich['price'],
         breadType: this.form.value.bread.toUpperCase(),
         mobilePhoneNumber: this.phoneNumber
      };

      this.ordersService.phoneNumber = this.phoneNumber;
      this.ordersService.selectedSandwich = this.sandwich;

      this.ordersService.postOrder(order)
         .subscribe((res) => {
            if (res) this.router.navigate(['/confirmation']);
         });
   }

}
