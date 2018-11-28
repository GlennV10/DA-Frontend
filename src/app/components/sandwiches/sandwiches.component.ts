import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SandwichesService } from '../../services/sandwiches.service';
import { OrdersService } from '../../services/orders.service';

@Component({
   selector: 'app-sandwiches',
   templateUrl: './sandwiches.component.html',
   styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {
   private sandwiches: Object[];

   constructor(
      private router: Router,
      private sandwichService: SandwichesService,
      private ordersService: OrdersService
   ) { }

   ngOnInit() {
      this.getSandwiches();
   }

   getSandwiches() {
      this.sandwichService.getSandwiches()
         .subscribe(sandwiches => {
            this.sandwiches = sandwiches;
         });
   }

   orderSandwich(sandwich: Object) {
      this.ordersService.selectedSandwich = sandwich;
      this.router.navigate(['/checkout'])
   }

}
