import { Component, OnInit } from '@angular/core';

import { RecommendationService } from '../../services/recommendation.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private recommendationService: RecommendationService,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
  }

  recommendSandwich(rating) {
    const item = {
       emailAddress: this.orderService.phoneNumber,
       ratedItem: this.orderService.selectedSandwich['id'],
       rating
    };

    this.recommendationService.recommendItem(item)
       .subscribe(data => {
          console.log(data);
       });
 }

}
