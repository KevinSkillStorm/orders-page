import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListingViewComponent } from './new-listing-view/new-listing-view.component';


const routes: Routes = [
  { path:'orders/new-listing', component: NewListingViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewListingRoutingModule { }
