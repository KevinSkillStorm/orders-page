import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListingViewComponent } from './new-listing-view.component';

describe('NewListingViewComponent', () => {
  let component: NewListingViewComponent;
  let fixture: ComponentFixture<NewListingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewListingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
