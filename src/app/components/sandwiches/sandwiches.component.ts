import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SandwichesService } from '../../services/sandwiches.service';
import { OrdersService } from '../../services/orders.service';
import { RecommendationService } from '../../services/recommendation.service';

import { Sandwich } from '../../models/sandwich.model';

@Component({
   selector: 'app-sandwiches',
   templateUrl: './sandwiches.component.html',
   styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {
   sandwiches: Sandwich[];
   admin: boolean = false;
   phoneNumber: string;

   constructor(
      private router: Router,
      private sandwichService: SandwichesService,
      private recommendationService: RecommendationService,
      private ordersService: OrdersService
   ) { }

   ngOnInit() {
      if (this.router.url === '/admin/sandwiches') this.admin = true;
      this.phoneNumber = localStorage.getItem('phoneNumber');
      if (this.phoneNumber) {
            this.getSandwichesByPhoneNumber();
      } else {
            this.getSandwiches();
      }      
   }

   getSandwiches() {
         this.sandwichService.getSandwiches()
            .subscribe(sandwiches => {
                  this.sandwiches = sandwiches;
            });
   }

   getSandwichesByPhoneNumber() {
      this.sandwichService.getSandwichesByPhoneNumber(this.phoneNumber)
         .subscribe(sandwiches => {
            this.sandwiches = sandwiches;
         });
   }

   orderSandwich(sandwich: Sandwich) {
      this.ordersService.selectedSandwich = sandwich;
      this.router.navigate(['/checkout'])
   }

   editSandwich(sandwich: Sandwich) {
      this.sandwichService.selectedSandwich = sandwich;
      this.router.navigate(['/admin/sandwiches/edit']);
   }

   setPhoneNumber(event) {
      this.phoneNumber = event.target.value;
      localStorage.setItem('phoneNumber', event.target.value);
      this.getSandwichesByPhoneNumber();
   }

}
