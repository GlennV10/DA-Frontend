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
   private admin: Boolean= false;

   constructor(
      private router: Router,
      private sandwichService: SandwichesService,
      private ordersService: OrdersService
   ) { }

   ngOnInit() {
      if (this.router.url === '/admin/sandwiches') this.admin = true;
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

   editSandwich(sandwich: Object) {
      this.sandwichService.selectedSandwich = sandwich;
      this.router.navigate(['/admin/sandwiches/edit']);
   }

}
