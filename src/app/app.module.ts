import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { OrderSandwichComponent } from './components/order-sandwich/order-sandwich.component';

import { SandwichesService } from './services/sandwiches.service';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    SandwichesComponent,
    OrderSandwichComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SandwichesService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
