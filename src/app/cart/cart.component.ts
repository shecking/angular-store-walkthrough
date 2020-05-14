// This component was originally auto-generated
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CartService } from '../cart.service'
// Imports from @angular are pulling from the Angular source files
// The CartService import is the first step in configuring the cart component to be used as an Angular 'service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  // These are property definitions
  // `items` is used in cart interaction
  // `checkoutForm` is used by the constructor to create a form
  // The methods used by these definitions are created and stored in cart.service.ts

  constructor(
    // Injection of components
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit() {
    this.items = this.cartService.getItems()
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCart()
    this.checkoutForm.reset()

    console.warn('Your order has been submitted', customerData)
  }

}
