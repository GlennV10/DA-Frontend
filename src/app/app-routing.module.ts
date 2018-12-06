import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { OrderSandwichComponent } from './components/order-sandwich/order-sandwich.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddSandwichComponent } from './components/add-sandwich/add-sandwich.component';
import { EditSandwichComponent } from './components/edit-sandwich/edit-sandwich.component';

const appRoutes: Routes = [
   { path: 'sandwiches', component: SandwichesComponent },
   { path: 'checkout', component: OrderSandwichComponent },
   { path: 'confirmation', component: ConfirmationComponent },
   { path: 'admin/orders', component: OrdersComponent },
   { path: 'admin/sandwiches', component: SandwichesComponent },
   { path: 'admin/sandwiches/add', component: AddSandwichComponent },
   { path: 'admin/sandwiches/edit', component: EditSandwichComponent }
]

@NgModule({
   declarations: [],
   imports: [RouterModule.forRoot(appRoutes)],
   providers: [],
   bootstrap: [],
   exports: [RouterModule]
})

export class AppRoutingModule { }