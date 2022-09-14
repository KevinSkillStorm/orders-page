import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewListingRoutingModule } from './new-listing-routing.module';
import { IndexComponent } from '../index/index/index.component';
import { NewListingViewComponent } from './new-listing-view/new-listing-view.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    NewListingViewComponent
  ],
  imports: [
    CommonModule,
    NewListingRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewListingModule { }
