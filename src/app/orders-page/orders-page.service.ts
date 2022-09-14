import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './orders-page';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdersPageService {
  private url = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  getSellerOrders(id: number): Observable<Orders[]> {
    var url = `${this.url}/${id}`;
    return this.http.get<Orders[]>(url, this.httpOptions);
  }

  // Intention with this is to supposedly cancel an order.
  // cancelOrder(){

  // }
}
