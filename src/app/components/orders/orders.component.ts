import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order.model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: Order[];

    constructor(
        private router: Router,
        private ordersService: OrdersService
    ) { }

    ngOnInit() {
        this.getOrders();
    }

    getOrders() {
        let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
        this.ordersService.getOrdersByDate(date)
            .subscribe((orders) => {
                this.orders = orders;
            });
    }

    generateCSV() {
        let nonPrintedOrders = [];

        for (let order of this.orders) {
            if (!order['printed']) {
                nonPrintedOrders.push(order);
                this.ordersService.updateOrderPrinted(order)
                    .subscribe(order => {});
            }
        }
        
        let csvContent = 'data:text/csv;charset=utf-8,';
        nonPrintedOrders.forEach(order => {
            let row = Object.values(order).join(',');
            csvContent += `${row}\r\n`;
        });

        let encodedUri = encodeURI(csvContent);
        let link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'orders.csv');
        document.body.appendChild(link);
        
        link.click();

        this.router.navigate(['/admin/orders']);
    }

}
