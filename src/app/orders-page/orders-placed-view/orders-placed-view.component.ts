import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders-page';
import { OrdersPageService } from '../orders-page.service';

@Component({
  selector: 'app-orders-placed-view',
  templateUrl: './orders-placed-view.component.html',
  styleUrls: ['./orders-placed-view.component.css']
})
export class OrdersPlacedViewComponent implements OnInit {

  orders = [
    {
      id: 1,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 2,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 3,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    }
  ];

  constructor(
    private ordersPageService: OrdersPageService
  ) { }

  ngOnInit(): void {
    // this.getSellerOrder(1);
  }
  getSellerOrder(id: number){
    // this.ordersPageService.getSellerOrders(id).subscribe(orders => this.orders = orders);
  }

  fulfill() {
    
  }

}
