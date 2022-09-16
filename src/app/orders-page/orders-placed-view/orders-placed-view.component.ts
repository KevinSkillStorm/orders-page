import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    },{
      id: 4,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 5,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 6,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },{
      id: 7,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 8,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 9,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },
    {
      id: 10,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 11,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 12,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },{
      id: 13,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 14,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 15,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },{
      id: 16,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 17,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 18,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },
    {
      id: 19,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 20,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 21,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },{
      id: 22,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 23,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 24,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },{
      id: 25,
      email: "Body Wash",
      price: 2.99,
      quantity: 2,
      address: "123 Address St"
    },
    {
      id: 26,
      email: "Shampoo",
      price: 1.99,
      quantity: 1,
      address: "456 Fake Rd"
    },
    {
      id: 27,
      email: "Conditioner",
      price: 3.99,
      quantity: 5,
      address: "789 Dummy Ct"
    },
  ];
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    // this.getSellerOrder(1);
  }
  getSellerOrder(id: number){
    // this.ordersPageService.getSellerOrders(id).subscribe(orders => this.orders = orders);
  }

  fulfill(id: number) {
    this.route.navigateByUrl(`orders/create-pdf-page/${id}`);
  }

}
