import { TestBed } from '@angular/core/testing';

import { OrdersPlacedService } from './orders-placed.service';

describe('OrdersPlacedService', () => {
  let service: OrdersPlacedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersPlacedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
