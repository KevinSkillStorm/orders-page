import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { OrdersPlacedViewComponent } from './orders-placed-view/orders-placed-view.component';


@NgModule({
  declarations: [
    OrdersPlacedViewComponent
  ],
  imports: [
    CommonModule,
    OrdersPageRoutingModule
  ]
})
export class OrdersPageModule { }
