// With the exception of A. the `private` definition in the constructor, B. the `this.` method in ngOnInit, and C. the CartService import, this code was preconstructed by Angular as a boilerplate
// Use the command `ng generate <schematic> [options]` in terminal to create a schematic
// See https://angular.io/cli/generate for more
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// Importing the class CartService in order to retrieve shipping data with getShippingPrices()

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  // As with `product` (see product-list, product-details) and `items`+`checkoutForm` (see cart.component.ts), we must declare the variable `shippingCosts`

  constructor(
    private cartService: CartService
    // Injecting cartService to be used by ShippingComponent
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices()
    // Setting the shippingCosts property, particular to this component
  }
}
