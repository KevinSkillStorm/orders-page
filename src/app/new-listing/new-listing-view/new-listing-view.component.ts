import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-listing-view',
  templateUrl: './new-listing-view.component.html',
  styleUrls: ['./new-listing-view.component.css']
})
export class NewListingViewComponent implements OnInit {

  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get form() { return this.formGroup.controls; }

}
