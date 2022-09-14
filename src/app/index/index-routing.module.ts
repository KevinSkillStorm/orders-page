import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListingViewComponent } from '../new-listing/new-listing-view/new-listing-view.component';
import { OrdersPlacedViewComponent } from '../orders-page/orders-placed-view/orders-placed-view.component';


const routes: Routes = [
  { path:'orders/new-listing', component: NewListingViewComponent},
  { path: 'orders/orders-placed', component: OrdersPlacedViewComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
