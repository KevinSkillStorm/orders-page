import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders-page';
import { OrdersPageService } from '../orders-page.service';

@Component({
  selector: 'app-orders-placed-view',
  templateUrl: './orders-placed-view.component.html',
  styleUrls: ['./orders-placed-view.component.css']
})
export class OrdersPlacedViewComponent implements OnInit {
  orders: Orders[] = [];
  constructor(
    private ordersPageService: OrdersPageService
  ) { }

  ngOnInit(): void {
    // this.getSellerOrder(1);
  }
  getSellerOrder(id: number){
    this.ordersPageService.getSellerOrders(id).subscribe(orders => this.orders = orders);
  }
}
