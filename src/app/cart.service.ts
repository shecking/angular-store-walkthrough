// This file represents the cart 'service'.
// Angular services are instances of classes (in this case, class CartService) that can be made available to ANY part of the application
  // This means they are reusable, similar to SketchForm, SketchTable, SketchPreview in my capstone.
// Services share data between app parts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // This CartService class holds the method definitions for interactions the user will have with the cart (adding to cart, viewing cart, clearing cart, getting shipping prices)
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product)
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }

}
