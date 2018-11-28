import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { OrderSandwichComponent } from './components/order-sandwich/order-sandwich.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrdersComponent } from './components/orders/orders.component';

const appRoutes: Routes = [
   { path: 'sandwiches', component: SandwichesComponent },
   { path: 'checkout', component: OrderSandwichComponent },
   { path: 'confirmation', component: ConfirmationComponent },
   { path: 'orders', component: OrdersComponent } 
]

@NgModule({
   declarations: [],
   imports: [RouterModule.forRoot(appRoutes)],
   providers: [],
   bootstrap: [],
   exports: [RouterModule]
})

export class AppRoutingModule { }