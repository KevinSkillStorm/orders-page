import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePdfModule } from './create-pdf/create-pdf.module';
import { NewListingModule } from './new-listing/new-listing.module';
import { OrdersPageModule } from './orders-page/orders-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OrdersPageModule,
    NewListingModule,
    HttpClientModule,
    CreatePdfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
