import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
// `Input` will be used to receive `product`
import { Output, EventEmitter } from '@angular/core';
// `Output` will be used to define an action
// `EventEmitter` will literally be used to emit an event, which will be acted upon in the ProductListComponent

@Component({
  // The @Component is called a 'decorator', similar in function to the <meta> tag used in HTML <head>, and contains three auto-generated attributes:
    // `selector` is just the name, using the naming convention "app-<component_name>"
    // templateUrl and styleUrls reference the HTML and CSS files that will be used to display the component
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})

export class ProductAlertsComponent implements OnInit {
  // The Component will export this ProductAlertsComponent, handling the component's function.
  @Input() product;
  // The @Input decorator takes in the `product` as a value
  @Output() notify = new EventEmitter();
  // The @Output decorator sends out a new EventEmitter
  constructor() { }

  ngOnInit() {
  }
}
